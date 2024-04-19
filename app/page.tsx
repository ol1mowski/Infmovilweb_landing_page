import AboutUS from "@/components/AboutUS/AboutUS.component";
import Header from "@/components/Header/Header.component";
import HeaderInfoBar from "@/components/HeaderInfoBar/HeaderInfoBar.component";
import HomePage from "@/components/HomePage/HomePage.component";

export default function Home() {
  return (
    <>
      <HeaderInfoBar />
      <Header />
      <HomePage />
      <AboutUS />
    </>
  );
}
