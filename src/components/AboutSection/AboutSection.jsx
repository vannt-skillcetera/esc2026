import React from "react";
import "./AboutSection.css";
import { Link } from "react-router-dom";
import Pic from "../../assets/aboutPic.jpg";

const AboutSection = () => {
    return (
        
        <div className="aboutSecContainer">
            <div className="aboutSecContent">
                <h1>About ESC</h1>
                <p style={{fontSize: '24px'}}>ESC believes powerful voices, clearly expressed, can inspire thought and spark change.</p>
                <Link to="/about">View more</Link>
            </div>
            <img src={Pic} alt="ESC 2025 pic" />
        </div>
    );
}

export default AboutSection;