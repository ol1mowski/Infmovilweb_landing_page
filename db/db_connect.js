require("dotenv").config();

const { mongoose } = require("mongoose");

const {
  getHeaderBarData,
  getHeaderData,
  getHomePageData,
  getAboutUsData,
  getServicesData,
  getLoactionData,
  getOpinionsData,
  getFooterData,
} = require("./Utils/DataFetchingFunctions/DataFetchingFunctions");

const uri = process.env.DB_URL;

try {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (e) {
  console.log("Connection error:", e);
}

module.exports = {
  getHeaderBarData: getHeaderBarData,
  getHeaderData: getHeaderData,
  getAboutUsData: getAboutUsData,
  getHomePageData: getHomePageData,
  getServicesData: getServicesData,
  getOpinionsData: getOpinionsData,
  getLoactionData: getLoactionData,
  getFooterData: getFooterData,
};
