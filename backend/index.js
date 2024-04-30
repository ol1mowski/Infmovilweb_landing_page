const express = require("express");

const port = 8080;

const { HeaderBar } = require("./db");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

app.get("/api/headerbar", (req, res) => {
  (async function getData() {
    try {
      const docs = await HeaderBar.find();
      res.status(200).json(docs);
    } catch (err) {
      res.status(501).json({ error: err });
    }
  })();
});

app.listen(8080, () => {
  console.log(`Server work at ${port}`);
});
