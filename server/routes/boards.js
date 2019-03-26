const express = require("express");
const router = express.Router();
// Task Model
let Board = require("../models/boards");

router.get("/", async (req, res) => {
  try {
    let boards = await Board.find({});
    res.json(boards);
  } catch (e) {
    res.send(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let board = await Board.findById(req.params.id);
    return res.json({
      data: board
    });
  } catch (e) {
    res.send(e);
  }
});

router.post("/", async (req, res) => {
  try {
    let board = new Board({
      title: req.body.title
    });
    await board.save();
    return res.json({
      msg: "Board added",
      data: board
    });
  } catch (e) {
    res.send(e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let board = await Board.remove({
      _id: req.params.id
    });
    res.json({
      msg: "Deleted Successfully"
    });
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
