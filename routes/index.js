const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

//The welcome page
router.get("/", ensureAuthenticated, (req, res) => {
  res.render("../views/dashboard.ejs", {
    name: req.user.name
  });
});

module.exports = router;
