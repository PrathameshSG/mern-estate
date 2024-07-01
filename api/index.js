import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
dotenv.config();

// import userRouter from "./routes/user.route.js";
// import authRouter from "./routes/auth.route.js";
// import listingRouter from "./routes/listing.route.js";
// import cookieParser from "cookie-parser";
// import path from "path";

// connecting to database
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

// inistlize express
const app = express();

// listen app
app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

// add router

app.use("/api/user", userRouter);
