var express = require("express");
var router = express.Router();
const path = require("path");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleTimeString(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleTimeString(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

// GET add new message page

router.get("/new", function (req, res) {
  // res.sendFile(path.join(__dirname, "../views/new.html"));
  res.render("new", { title: "New Messageboard" });
});
router.post("/new", function (req, res) {
  console.log(req.body);
  req.body["added"] = new Date().toLocaleTimeString();
  messages.push(req.body);
  res.redirect("/");
});
module.exports = router;
