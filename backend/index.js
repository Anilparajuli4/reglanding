const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();
const userRouters = require("./routes/userRoutes")

app.use("/api", userRouters)

app.get("/", (req, res) => {
  res.send("Regaarder Server is Running");
});

app.listen(PORT);
