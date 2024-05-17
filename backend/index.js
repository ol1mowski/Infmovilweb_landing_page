const express = require("express");
const port = 8080;


const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(bodyParser.json());

app.get("/api/headerbar", (req, res) => {
  (async function getData() {
    try {
      const docs = await HeaderBar.find();
      console.log(docs);
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

app.post("/api/save", (req, res) => {
  const receivedData = req.body;

  if (receivedData) {
    res.status(200).json({ message: "Ok" });
  } else {
    res.status(500).json({ message: "Fail" });
  }
});

app.listen(8080, () => {
  console.log(`Server work at ${port}`);
});
