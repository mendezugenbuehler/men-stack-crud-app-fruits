const mongoose = require("mongoose"); // mongo doesn't provide schema, mongoose does

const fruitSchema = new mongoose.Schema({
    name: String,
    isReadyToEat: Boolean,
    price: Number,
  });

  const Fruit = mongoose.model("Fruit", fruitSchema);
  module.exports = Fruit;
