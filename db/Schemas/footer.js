const mongoose = require("mongoose");

const footerSchema = new mongoose.Schema({
  companyInfoData: {
    title: String,
    description: String,
  },
  items: [{ items: [{  }], title: String }],
});

const Footer = mongoose.model("Footer", footerSchema);

module.exports = {
  Footer: Footer,
};
