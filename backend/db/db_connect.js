const { mongoose } = require("mongoose");
const { Header } = require("./Schemas/header");
const { HeaderBar } = require("./Schemas/headerBar");
const { HomePage } = require("./Schemas/homePage");
const { AboutUs } = require("./Schemas/aboutUs");
const { Services } = require("./Schemas/services");
const { Opinions } = require("./Schemas/Opinions");
const { Location } = require("./Schemas/location");
const { Footer } = require("./Schemas/footer");

require("dotenv").config();

const uri = process.env.URL;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


module.exports = {
  HeaderBar: HeaderBar,
  Opinions: Opinions,
  Header: Header,
  HomePage: HomePage,
  AboutUs: AboutUs,
  Services: Services,
  Location: Location,
  Footer: Footer,
};
