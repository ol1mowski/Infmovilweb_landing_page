const mongoose = require("mongoose");

const aboutUsSchema = new mongoose.Schema({
  sectionInfo: {
    category: String,
    title: String,
    image: String,
    description: String,
  },
  button: { buttonText: String, buttonIcon: String },
});

const AboutUs = mongoose.model("AboutUs", aboutUsSchema);

module.exports = {
  AboutUs: AboutUs,
};
