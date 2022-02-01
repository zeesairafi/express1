const mongoose = require("mongoose");
const mongooseZlugPlugin = require("mongoose-slug-plugIn");

const DataSchema = new mongoose.Schema({
  
    name: {type: String, required: true},
    image: String ,
    description: String,
    color: String,
    quantity:{type: Number, min: 0},
    price: {type: Number, default: 3}
},
{timestamps: true}
)


DataSchema.plugin(mongooseSlugPlugin, {tmpl: "<%=name%>"})
module.exports = mongoose.module("Data", DataSchema)




