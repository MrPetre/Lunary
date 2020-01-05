const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

//Main page
router.get("/", (req, res) => res.render("../views/index.ejs"));

//The welcome page
router.get("/profile", ensureAuthenticated, (req, res) => {
  res.render("../views/welcome_screen.ejs", {
    name: req.user.name
  });
});

module.exports = router;
