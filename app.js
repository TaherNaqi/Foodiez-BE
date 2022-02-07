const express = require("express");
const cors = require("cors");
const passport = require("passport");
const connectDb = require("./database");
const recipeRoutes = require("./api/recipes/routes");
const ingredientRoutes = require("./api/ingredients/routes");
const userRoutes = require("./api/users/routes");
const { localStrategy, jwtStrategy } = require("./middleware/passport");
const app = express();
connectDb();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
});
app.use(passport.initialize());
passport.use(jwtStrategy);
passport.use(localStrategy);
// Routes
app.use("/api", userRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/ingredients", ingredientRoutes);
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});
app.listen(process.env.PORT || 8000);
