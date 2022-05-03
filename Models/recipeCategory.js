const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {type:String},
    bodyPart: {type:String},
    equipment: {type:String},
    gifUrl: {type:String},
    name: {type:String},
    target: {type:String},
    userId: {type:String},
});

module.exports = mongoose.model("Exercise",exerciseSchema);