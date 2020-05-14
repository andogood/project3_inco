var express = require("express");
var router = express.Router();
// connection = require("./db");

/* GET New   page. */
router.get("/", function (req, res, next) {
  res.render("new", { title: "Create New Database" });
});

// app.get("/new", function (req, res) {
//   connection.query("SELECT * FROM schedule", function (err, rows, fields) {
//     res.render("schedule", {
//       items: rows,
//     });
//   });
// });

module.exports = router;
