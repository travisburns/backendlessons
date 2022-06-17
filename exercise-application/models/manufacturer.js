const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ManufactuerSchema = new Schema({
    name: {type: String, required: true, maxlength: 100 },
    description: { type: String, maxlength: 500 },
});

//Virtual for manufactuer's URL
ManufacturerSchema.virtual("url").get(function (){
    return "/manufacturer/" + this._id;
});

//Export model
module.exports = mongoose.model("Manufacturer", ManufacturerSchema);