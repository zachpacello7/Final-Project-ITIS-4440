const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {type:String},
    exercise: {type:Schema.Types.ObjectId, ref:"Exercise"},
    post: {type:String},
    comments: {type:Schema.Types.Array},
    userId:{type:String}
});

module.exports = mongoose.model("Post",postSchema);