import AboutUS from "@/components/Pages/AboutUS/AboutUS.dataFetching";
import Footer from "@/components/Pages/Footer/Footer.dataFetching";
import HamburgerMenu from "@/components/Pages/Header/HamburgerMenu/HamburgerMenu.dataFetching";
import Header from "@/components/Pages/Header/Header.dataFetching";
import HeaderBarFetch from "@/components/Pages/HeaderInfoBar/HeaderBar.dataFetching";
import HomePage from "@/components/Pages/HomePage/HomePage.dataFetching";
import Location from "@/components/Pages/Location/Location.dataFetching";
import Opinions from "@/components/Pages/Opinions/Opinions.component";
import Services from "@/components/Pages/ServicesComponent/Services.component";

function LandingPage() {
  return (
    <>
      <HeaderBarFetch />
      <Header />
      <HamburgerMenu />
      <HomePage />
      <AboutUS />
      <Services />
      <Opinions />
      <Location />
      <Footer />
    </>
  );
}

export default LandingPage;
