const express = require("express");
const path = require("path");
const app = express();
const indexRoute = require("./route/indexRoute");
require("dotenv").config();

const PORT = process.env.PORT;

// Middleware to parse JSON
app.use(express.json());

// Serve API Documentation UI (static files from "API UI" folder)
app.use(express.static(path.join(__dirname, "API UI")));

// Serve index.html at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "API UI", "index.html"));
});

// Use routes
app.use("/api", indexRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ---> ${PORT}`);
});
