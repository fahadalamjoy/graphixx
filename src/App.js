// import logo from './logo.svg';
// import './App.css';

import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import HireTextSection from "./sections/HireTextSection";
import OurWorkSection from "./sections/OurWorkSection";
import PackagesSection from "./sections/PackagesSection";
import SecondSection from "./sections/SecondSection";
import SkillSection from "./sections/SkillSection";

function App() {
  return (
    <div className="">
      <Hero />
      <SecondSection />
      <SkillSection />
      <OurWorkSection />
      <PackagesSection />
      <HireTextSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
