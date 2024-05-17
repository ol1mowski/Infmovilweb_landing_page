const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  sectionInfo: {
    category: String,
    title: String,
    description: String,
    companyLocation: String,
  },
  button: { buttonText: String, buttonIcon: String },
});

const Location = mongoose.model("Locations", locationSchema);

module.exports = {
  Location: Location,
};
