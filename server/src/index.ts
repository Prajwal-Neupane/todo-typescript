import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { PORT, DB } from "./config/index";
import todoRoutes from "./routes/todoRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", todoRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
