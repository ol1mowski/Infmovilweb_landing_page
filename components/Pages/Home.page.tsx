import AboutUS from "@/components/AboutUS/AboutUS.dataFetching";
import Footer from "@/components/Footer/Footer.dataFetching";
import HamburgerMenu from "@/components/Header/HamburgerMenu/HamburgerMenu.dataFetching";
import Header from "@/components/Header/Header.dataFetching";
import HeaderBarFetch from "@/components/HeaderInfoBar/HeaderBar.dataFetching";
import HomePage from "@/components/HomePage/HomePage.dataFetching";
import Location from "@/components/Location/Location.dataFetching";
import Services from "@/components/ServicesComponent/Services.component";

function Home() {
  return (
    <>
      <HeaderBarFetch />
      <Header />
      <HamburgerMenu />
      <HomePage />
      <AboutUS />
      <Services />
      <Location />
      <Footer />
    </>
  );
}

export default Home;
