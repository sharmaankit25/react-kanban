const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

mongoose.connect("mongodb://localhost/kanban", { useNewUrlParser: true });
let db = mongoose.connection;

// Check Connection
db.once("open", () => {
  console.log("Connected to mongodb");
});

// Check for Db errors
db.on("error", function(err) {
  console.log(err);
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);

// set static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.send("Server Running"));

app.use("/api/boards", require("./routes/boards"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
