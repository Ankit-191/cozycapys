import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import Impact from "./components/Impact";
import Aboutus from "./components/Aboutus";
import Preloader from "./components/Preloader";
import Backtotopbtn from "./components/Backtotopbtn";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({ once: true, disable: "mobile" });
  }, []);
  return (
    <>
      <div className=" overflow-x-hidden">
        <Preloader />
        <Backtotopbtn />
        <Hero />
        <Aboutus />
        <Impact />
        <Roadmap />
        <Faqs />
        <Footer />
      </div>
    </>
  );
}

export default App;
