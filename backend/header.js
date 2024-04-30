const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Infmovilweb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
  mongoose: mongoose,
  Header: Header,
};
