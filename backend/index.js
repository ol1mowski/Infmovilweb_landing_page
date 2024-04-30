const express = require("express");

const port = 8080;

const {
  HeaderBar,
  HomePage,
  Header,
  Services,
  AboutUs,
  Opinions,
  Location,
  Footer,
} = require("./db/db_connect.js");

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
      res.status(500).json({ error: err });
    }
  })();
});

app.get("/api/header", (req, res) => {
  (async function getData() {
    try {
      const docs = await Header.find();
      res.status(200).json(docs);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  })();
});

app.get("/api/homepage", (req, res) => {
  (async function getData() {
    try {
      const docs = await HomePage.find();
      res.status(200).json(docs);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  })();
});

app.get("/api/aboutus", (req, res) => {
  (async function getData() {
    try {
      const docs = await AboutUs.find();
      res.status(200).json(docs);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  })();
});

app.get("/api/services", (req, res) => {
  (async function getData() {
    try {
      const docs = await Services.find();
      res.status(200).json(docs);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  })();
});

app.get("/api/opinions", (req, res) => {
  (async function getData() {
    try {
      const docs = await Opinions.find();
      res.status(200).json(docs);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  })();
});

app.get("/api/location", (req, res) => {
  (async function getData() {
    try {
      const docs = await Location.find();
      res.status(200).json(docs);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  })();
});

app.get("/api/footer", (req, res) => {
  (async function getData() {
    try {
      const docs = await Footer.find();
      res.status(200).json(docs);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  })();
});

app.listen(8080, () => {
  console.log(`Server work at ${port}`);
});
