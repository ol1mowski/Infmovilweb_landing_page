import AboutUS from "@/components/CMS/AboutUS/AboutUS.component";
import AdminBar from "@/components/CMS/AdminBar/AdminBar";
import Header from "@/components/CMS/Header/Header.component";
import HeaderBarFetch from "@/components/CMS/HeaderInfoBar/HeaderBar";
import HomePage from "@/components/CMS/HomePage/HomePage.component";
import React from "react";

function page() {
  return (
    <>
      <AdminBar />
      <HeaderBarFetch />
      <Header />
      <HomePage />
      <AboutUS />
    </>
  );
}

export default page;
