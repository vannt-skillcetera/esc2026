import React from "react";
import "./ReasonCard.css"

const ReasonCard = ({ icon, title, content }) => {
    return (
        <div className="reasonCard">
            <div className="cardIcon">
                <img src={icon} alt="icon" />
            </div>

            <div className="cardTitle">
                <h3>{title}</h3>
            </div>

            <div className="cardContent">
                <p>{content}</p>
            </div>
        </div>
    );
}

export default ReasonCard

