import Hero from "../components/HomeHero/Hero.jsx";
import AboutSection from "../components/HomeAbout/AboutSection.jsx";
import WhyJoin from "../components/HomeWhy/WhyJoin.jsx";
import Number from "../components/HomeNumber/Number.jsx";
import Register from "../components/HomeRegister/Register.jsx";
function Home() {
  return (
      <div style={{display: 'flex',flexDirection: 'column', gap: '50px'}}>
        <Hero />
        <hr />
        <AboutSection />
        <hr />
        <WhyJoin />
        <hr />
        <Number />
        <hr />
        <Register />
        <hr />
      </div>
    
  );
}

export default Home;
