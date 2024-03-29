var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EquipmentSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 100 },
    description: {type: String, required: true, maxLength: 5000 },
    inStock: {type: Number, required: true, max: 9999, min: 0 },
    price: { type: Number, required: true, max: 999999, min: 0 },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    manufacturer: {
      type: Schema.Types.ObjectId,
      ref: "Manufacturer",
      required: true,
    },
    fileName: { type: String },
  }
  
  );



// Virtual for equipment's URL
EquipmentSchema
.virtual('url')
.get(function () {
  return '/component/' + this._id;
});

//Export model
module.exports = mongoose.model('Equipment', EquipmentSchema);
