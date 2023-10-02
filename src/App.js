// import logo from './logo.svg';
// import './App.css';

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
    </div>
  );
}

export default App;
