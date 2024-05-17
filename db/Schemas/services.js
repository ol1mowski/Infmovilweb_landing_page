const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
  sectionInfo: { category: String, title: String },
  Cards: [
    {
      description: String,
      title: String,
      image: String,
      button: { buttonText: String, buttonIcon: String },
    },
  ],
});

const Services = mongoose.model("Services", servicesSchema);


module.exports = {
  Services: Services,
};
