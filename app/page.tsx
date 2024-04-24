import AboutUS from "@/components/AboutUS/AboutUS.component";
import Footer from "@/components/Footer/Footer.component";
import HamburgerMenu from "@/components/Header/HamburgerMenu/HamburgerMenu";
import HomePage from "@/components/HomePage/HomePage.component";
import Location from "@/components/Location/Location.component";
import Opinions from "@/components/Opinions/Opinions.component";
import Services from "@/components/Opinions/Services-component/Services.component";

export default function Home() {
  return (
    <>
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
