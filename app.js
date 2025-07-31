import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.send("HELLO")
});


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server listening to PORT " + PORT);
});