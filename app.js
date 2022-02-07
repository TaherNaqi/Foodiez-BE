const express = require("express");
const catagoriesroutes = require("./api/Catagories/routes");
const app = express();
const connectDB = require("./database");
// const Catagory = require("./models/Catagory");

app.use(express.json());

app.use((req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
});

// Routes

app.use("/api/Catagories", catagoriesroutes);
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});
connectDB();

app.listen(8000, () => {
  console.log("yayy");
});
