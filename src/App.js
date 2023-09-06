import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import Impact from "./components/Impact";
import Aboutus from "./components/Aboutus";
function App() {
  return (
    <>
      <div className=" overflow-x-hidden">
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
