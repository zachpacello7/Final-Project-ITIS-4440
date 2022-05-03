const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    label: {type:String},
    image: {type:String},
    recipeInfo: {type:String},
    calories: {type:String},
    ingredientsArray: {type:Schema.Types.Array},
    userId:{type:String}
});

module.exports = mongoose.model("Recipe",recipeSchema);