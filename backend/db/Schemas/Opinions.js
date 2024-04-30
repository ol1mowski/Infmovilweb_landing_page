const mongoose = require("mongoose");

const opinionsSchema = new mongoose.Schema({
  sectionData: { category: String, title: String, score: String },
  Cards: [
    {
      author: String,
      icon: String,
      opinion: String,
    },
  ],
  button: { buttonText: String, buttonIcon: String },
});

const Opinions = mongoose.model("Opinions", opinionsSchema);

module.exports = {
  Opinions: Opinions,
};
