import AdminBar from "@/components/CMS/AdminBar/AdminBar";
import Header from "@/components/CMS/Header/Header.component";
import HeaderBarFetch from "@/components/CMS/HeaderInfoBar/HeaderBar";
import React from "react";

function page() {
  return (
    <>
      <AdminBar />
      <HeaderBarFetch />
      <Header />
    </>
  );
}

export default page;
