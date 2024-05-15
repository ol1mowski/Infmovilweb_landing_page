import AboutUS from "@/components/LandingPage/AboutUS/AboutUS.dataFetching";
import Footer from "@/components/LandingPage/Footer/Footer.dataFetching";
import HamburgerMenu from "@/components/LandingPage/Header/HamburgerMenu/HamburgerMenu";
import Header from "@/components/LandingPage/Header/Header.dataFetching";
import HeaderBarFetch from "@/components/LandingPage/HeaderInfoBar/HeaderBar.dataFetching";
import HomePage from "@/components/LandingPage/HomePage/HomePage.component";
import Location from "@/components/LandingPage/Location/Location.component";
import Opinions from "@/components/LandingPage/Opinions/Opinions.component";
import Services from "@/components/LandingPage/ServicesComponent/Services.component";

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
