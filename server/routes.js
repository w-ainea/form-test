const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("App is running");
});

router.post("/user", (req, res) => {
  console.log(
    req.body
  ); /* visualize the request and verify that all the necessary data is being sent */
  res.send("Working");
});

module.exports = router;
