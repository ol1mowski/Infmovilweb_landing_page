import AboutUS from "@/components/AboutUS/AboutUS.component";
import Footer from "@/components/Footer/Footer.component";
import Header from "@/components/Header/Header.component";
import HeaderInfoBar from "@/components/HeaderInfoBar/HeaderInfoBar.component";
import HomePage from "@/components/HomePage/HomePage.component";
import Location from "@/components/Location/Location.component";
import Opinions from "@/components/Opinions/Opinions.component";
import Services from "@/components/Opinions/Services-component/Services.component";

export default function Home() {
  return (
    <>
      <HeaderInfoBar />
      <Header />
      <HomePage />
      <AboutUS />
      <Services />
      <Opinions />
      <Location />
      <Footer />
    </>
  );
}
