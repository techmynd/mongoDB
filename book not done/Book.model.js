const mongoose = require(mongoose);
const Schema = mongoose.Schema; // schema is a method from mongoose

const BookSchema = new Schema({
  title: String,
  author: String,
  category: String,
});

module.exports = mongoose.model("Book", BookSchema);
