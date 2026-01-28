import Hero from "../components/Hero/Hero.jsx";
import AboutSection from "../components/AboutSection/AboutSection.jsx";
import WhyJoin from "../components/WhyJoin/WhyJoin.jsx";
function Home() {
  return (
      <div style={{display: 'flex',flexDirection: 'column', gap: '50px'}}>
        <Hero />
        <hr />
        <AboutSection />
        <hr />
        <WhyJoin />
      </div>
    
  );
}

export default Home;
