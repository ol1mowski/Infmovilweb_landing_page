const mongoose = require("mongoose");

const homePageSchema = new mongoose.Schema({
  items: [],
  icons: {
    companyLogo: String,
    hamburgerIcon: String,
    searchIcon: String,
  },
});

const HomePage = mongoose.model("HomePage", homePageSchema);

module.exports = {
  HomePage: HomePage,
};
