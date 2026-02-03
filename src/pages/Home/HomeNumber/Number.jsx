import React from "react";
import "./Number.css";

const Number = () => {
    return (
        <div className="numberContainer">
            <h1>ESC in Numbers</h1>
            <div className="numberItems">
                <div className="numberItem">
                    <h2>3+</h2>
                    <p>Seasons</p>
                </div>
                
                <div className="numberItem">
                    <h2>20+</h2>
                    <p>Universities</p>
                </div>
                
                <div className="numberItem">
                    <h2>200+</h2>
                    <p>Contestants</p>
                </div>

                <div className="numberItem-full">
                    <h2>50+ million VND</h2>
                    <p>Total prize</p>
                </div>
            </div>
            
        </div>
    );
}

export default Number;