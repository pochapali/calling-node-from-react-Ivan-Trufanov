const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3001;

app.get("/", (req, res) => {
  res.status(200).json({ message: "that's good" });
});

app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
