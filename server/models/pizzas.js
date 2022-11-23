const  mongoose = require("mongoose")

const { Schema } = mongoose;

const pizzaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  varient: {
    type: Array,
    required: true,
  },
  prices: {
    type: Object,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    },
  
}, { timestamps: true });

module.exports = mongoose.model("Pizzas", pizzaSchema);