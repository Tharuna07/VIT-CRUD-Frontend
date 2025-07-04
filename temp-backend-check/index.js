const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);
app.use("/products", cartRoutes);

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database is connected");
  } catch (error) {
    console.log(error);
    process.exit(1); // Exit if DB connection fails
  }
};
app.get("/", (req, res) => {
  res.send("Hello World");
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  dbConnect();
  console.log(`server started on port ${PORT}`);
});
