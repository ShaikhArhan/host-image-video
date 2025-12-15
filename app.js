const express = require("express");
const app = express();
const indexRoute = require("./route/indexRoute");
const { apiDocsMiddleware } = require("./apiUI");
require("dotenv").config();

const PORT = process.env.PORT;

// Middleware to parse JSON
app.use(express.json());

// API Documentation UI at root
app.get("/", apiDocsMiddleware);

// Use routes
app.use("/api", indexRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ---> ${PORT}`);
});
