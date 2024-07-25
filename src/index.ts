import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello world v1"
  })
});

app.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON PORT: ${PORT}`);
});