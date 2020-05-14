var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var indexRouter = require("./routes/index");
var newRouter = require("./routes/new");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "People1a.",
  database: "mrcoffeedb",
  multipleStatements: true,
});

// db.execute("SELECT * FROM schedule");

// Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected...");
});

//Select all customers and return the result object:
// db.query("SELECT * FROM schedule", function (err, result, fields) {
//   if (err) throw err;
//   console.log(result);
// });

// // POST /login gets urlencoded bodies
// app.post("/new", urlencodedParser, function (req, res) {
//   res.send("Schedule Added to Database, " + req.body.username);
// });

module.exports = app;
