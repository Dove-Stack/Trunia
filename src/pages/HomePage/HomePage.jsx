import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import TruniaReason from "../../components/TruniaReason/TruniaReason.jsx";
import TrustedBy from "../../components/TrustedBy/TrustedBy.jsx";
import Feature from "../../components/Feature/Feature.jsx";
import Step from "../../components/Step/Step.jsx";
import Demo from "../../components/Demo/Demo.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import Counter from "../../components/Counter/Counter.jsx";
import UseCase from "../../components/UseCase/UseCase.jsx";
import TruniaDifference from "../../components/TruniaDifference/TruniaDifference.jsx";
import SideBySide from "../../components/SideBySide/SideBySide.jsx";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <TruniaReason />
      <hr className="my-3 border-none h-px bg-slate-100/90" />

      <TruniaDifference />

      <Step />
      <hr className="my-3 border-none h-px bg-slate-100/90" />

      <SideBySide />

      <UseCase />
      <hr className="my-3 border-none h-px bg-slate-100/90" />
    </>
  );
};

export default HomePage;
