const express = require("express");
const router = express.Router();
const cloudinaryRoute = require("./cloudinaryRoute");

router.use(cloudinaryRoute);

module.exports = router;
