import React from "react";
import "./ReasonCard.css"

const ReasonCard = ({ icon, title, content }) => {
    return (
        <div className="reasonCard">
            <div className="icon">
                <img src={icon} alt="icon" />
            </div>

            <div className="title">
                <h3>{title}</h3>
            </div>

            <div className="content">
                <p>{content}</p>
            </div>
        </div>
    );
}

export default ReasonCard

