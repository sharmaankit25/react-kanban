let mongoose = require("mongoose");

let boardsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false
  }
);

let Board = (module.exports = mongoose.model("Boards", boardsSchema));
