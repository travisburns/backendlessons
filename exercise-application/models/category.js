const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: { type: String, required: true, maxlength: 30 },
    description: { type: String, maxlength: 500 },
});


//Virtual for manufacter's URL
CategorySchema.virtual("url").get(function (){
    return "/category/" + this._id;
});

//export model

module.exports = mongoose.model("Category", CategorySchema);

