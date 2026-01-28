import aboutPic from "../../assets/aboutPic.jpg";
import "./About.css";
import captureAbout1 from "../../assets/captureAbout1.jpg";
import horizontalBlank from "../../assets/horizontalBlank.jpg";

function About() {
  return (
      <div className="body-content">

        <div className="top-content">
          <div className="about-us-header">
            <h1>About us</h1>
          </div>

          <div className="about-us-card">
            <img src={aboutPic} alt="" />
          </div>
        </div>

        <div className="slogan">
          <div className="blank"></div>

          <div className="slogan-para">
            <h1>We Slogan</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.</p>
          </div>
        </div>

        <div className="esc-intro">
          <div className="intro-card">
            <img src={captureAbout1} alt="" />
          </div>

          <div className="intro-para">
            <h1>What is ESC?</h1>
            <p>The English Speaking Competition is an annual event designed to empower students through public speaking. We aim to cultivate confidence, critical thinking and effective communication skill among the youth of our city.</p>
          </div>
        </div>

        <div className="we-goal">
          <div className="goal-para">
            <h1>We goal</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex.</p>
          </div>

          <div className="goal-card">
            <img src={horizontalBlank} alt="" />
          </div>
        </div>
      </div>
  );
}

export default About;