//Checks to see if the server is in a test or production build
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

//Dependencies
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const flash = require("connect-flash");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
const app = express();

//Passport config
require("./config/passport-config")(passport);

//Express initializers
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

//Express session
app.use(
  session({
    secret: "nyan cat",
    resave: true,
    saveUninitialized: true
  })
);

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Connect flash
app.use(flash());

//Global variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

//Databse config
const db = require("./config/keys").MongoURI;

//Connect to database(s)
mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  //Ensures mongoose is connected
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));

//Sets the layouts
app.set("view engine", "ejs");
app.use(expressLayouts);

//Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

//Initializes the server w/ port 3000 or the server side port
app.listen(process.env.PORT || 3000, function() {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
