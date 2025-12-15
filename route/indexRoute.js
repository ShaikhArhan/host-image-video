const express = require("express");
const router = express.Router();
const cloudinaryRoute = require("./cloudinaryRoute");

router.use("/cloudinary", cloudinaryRoute);

module.exports = router;
