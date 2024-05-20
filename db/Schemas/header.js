const mongoose = require("mongoose");

const headerSchema = new mongoose.Schema({
  items: [],
  icons: {
    companyLogo: String,
    hamburgerIcon: String,
    searchIcon: String,
  },
});

const Header = mongoose.model("Header", headerSchema);

module.exports = {
  Header: Header,
};
