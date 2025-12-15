const express = require("express");
const path = require("path");
const app = express();
const indexRoute = require("./route/indexRoute");
require("dotenv").config();

const PORT = process.env.PORT;

// Middleware to parse JSON
app.use(express.json());

// Serve API Documentation UI (static files from "api_ui" folder)
app.use(express.static(path.join(__dirname, "api_ui")));

// Serve index.html at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "api_ui", "index.html"));
});

// Use routes
app.use("/api", indexRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ---> ${PORT}`);
});
