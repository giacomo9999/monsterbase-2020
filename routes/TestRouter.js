const express = require("express");
const router = express();

router.get("/", (req, res) => {
  res.send("Test route working OK");
});

module.exports = router;
