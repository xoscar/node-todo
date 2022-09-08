var express = require("express");
var Tracer = require("../utils/tracer");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  const span = Tracer.createSpanFromContext("users");

  res.json({ items: [], total: 0 });

  span.end();
});

module.exports = router;
