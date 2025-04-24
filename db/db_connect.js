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

const uri = process.env.DB_URL || 'mongodb://localhost:27017/infmovilweb';

console.log("DB_URL:", process.env.DB_URL);
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("NEXT_PUBLIC_SKIP_DB_CONNECTION:", process.env.NEXT_PUBLIC_SKIP_DB_CONNECTION);

const mockData = {
  headerBar: [{ companyContact: [], icons: [] }],
  header: [{ items: [], icons: {} }],
  aboutUs: [{ sectionInfo: {}, button: {} }],
  homePage: [{ Cards: [] }],
  services: [{ sectionInfo: {}, Cards: [] }], 
  opinions: [{ sectionInfo: {}, Cards: [], button: {} }],
  location: [{ sectionInfo: {}, button: {} }],
  footer: [{ companyInfoData: {}, items: [] }],
};

const shouldSkipDbConnection = process.env.NEXT_PUBLIC_SKIP_DB_CONNECTION === 'true' || 
                               process.env.NODE_ENV === 'test';

if (!shouldSkipDbConnection) {
  try {
    console.log("Łączenie z MongoDB pod adresem:", uri);
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Połączenie z MongoDB ustanowione pomyślnie");
  } catch (e) {
    console.error("Błąd połączenia z MongoDB:", e);
  }

  module.exports = {
    getHeaderBarData,
    getHeaderData,
    getAboutUsData,
    getHomePageData,
    getServicesData,
    getOpinionsData,
    getLoactionData,
    getFooterData,
  };
} else {
  console.log("Używam mockowych danych zamiast połączenia z bazą danych MongoDB");
  
  module.exports = {
    getHeaderBarData: async () => mockData.headerBar,
    getHeaderData: async () => mockData.header,
    getAboutUsData: async () => mockData.aboutUs,
    getHomePageData: async () => mockData.homePage,
    getServicesData: async () => mockData.services,
    getOpinionsData: async () => mockData.opinions,
    getLoactionData: async () => mockData.location,
    getFooterData: async () => mockData.footer,
  };
}
