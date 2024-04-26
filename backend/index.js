const express = require("express");
const app = express();
const port = 8080;

const jsonData = {
  name: "John",
  age: 30,
  city: "New York",
};

app.get("/api/data", (req, res) => {
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});
