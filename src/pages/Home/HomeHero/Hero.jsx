import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <div className="heroContainer">
            <h1>English Speaking Competition</h1>
            <p>Description</p>
            <div className="heroContainer-buttons">
                <Link to="/season">View current season</Link>
                <Link to="/season">Explore last season</Link>
            </div>
        </div>
    );
};

export default Hero;
