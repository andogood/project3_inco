var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  var sql = "SELECT * FROM users";

  // db.query(sql, function (err, data, fields) {
  //   if (err) throw err;

  res.render("index", { title: "Mr. Coffee Database" /*, userData: data */ });
});
module.exports = router;
