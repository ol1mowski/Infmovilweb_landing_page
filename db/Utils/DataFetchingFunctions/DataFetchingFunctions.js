const { HeaderBar } = require("../../Schemas/headerBar");
const { Header } = require("../../Schemas/header");
const { AboutUs } = require("../../Schemas/aboutUs");
const { HomePage } = require("../../Schemas/homePage");
const { Services } = require("../../Schemas/services");
const { Opinions } = require("../../Schemas/Opinions");
const { Location } = require("../../Schemas/location");
const { Footer } = require("../../Schemas/footer");

async function getHeaderBarData() {
  try {
    const data = await HeaderBar.find();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function getHeaderData() {
  try {
    const data = await Header.find();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function getAboutUsData() {
  try {
    const data = await AboutUs.find();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function getHomePageData() {
  try {
    const data = await HomePage.find();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function getServicesData() {
  try {
    const data = await Services.find();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function getOpinionsData() {
  try {
    const data = await Opinions.find();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function getLoactionData() {
  try {
    const data = await Location.find();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

async function getFooterData() {
  try {
    const data = await Footer.find();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
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
