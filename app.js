let express = require("express");
let morgan = require("morgan");
let methodOverride = require("method-override");
let exerciseRoutes = require("./Routes/exerciseRoutes");
let mainRoutes = require("./Routes/mainRoutes");
let port = 3000;
let host = "localhost";
let mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");


const app = express();
app.set("view engine","ejs");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}))
app.use(express.static("Public"))
app.use(morgan("tiny"));

mongoose.connect("mongodb://localhost:27017/Exercise", { useNewUrlParser: true,  useUnifiedTopology: true })
.then(()=>{
    app.listen(port,host,()=>{
        console.log("Server is running on port "+port);
    });
})
.catch(err=>console.log(err.message));
app.use(session({
    secret:"as;ldkjfja;dlfkj",
    resave:false,
    saveUninitialized:false,
    cookie:{maxAge:60*60*1000},
    store:new MongoStore({mongoUrl:"mongodb://localhost:27017/Exercise"})
}));
app.use(flash());


app.use((req, res, next)=>{
    res.locals.user = req.session.user||null;
    res.locals.users = req.session.hostName|| null;
    res.locals.successMessages= req.flash("Success");
    res.locals.errorMessages= req.flash("Error");
    //console.log(res.locals.user)
    next();
})

app.use("/exercises", exerciseRoutes)
app.use("/", mainRoutes)

app.use((err,req,res,next)=>{
    if(!err.status){
        err.status = 500;
        err.message = ("Internal server error");
    }
    console.log(err)
});

