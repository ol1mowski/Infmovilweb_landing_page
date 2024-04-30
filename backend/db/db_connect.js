const { mongoose } = require("mongoose");
const { Header } = require("./Schemas/header");
const { HeaderBar } = require("./Schemas/headerBar");
const { HomePage } = require("./Schemas/homePage");
const { AboutUs } = require("./Schemas/aboutUs");
const { Services } = require("./Schemas/services");

mongoose.connect("mongodb://localhost:27017/Infmovilweb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  HeaderBar: HeaderBar,
  Header: Header,
  HomePage: HomePage,
  AboutUs: AboutUs,
  Services: Services,
};
