import React from "react";
import { Link } from 'react-router-dom';
import Poster from "../../assets/picture/poster.jpg";
import "./Season.css";
function Season() {
    return (
        <div className="season-container">
            <h1 className="title">Our Season</h1>
            <div className="card-wrapper">
                <div className="card side-card">
                    <div className="card-image">
                        <img src={Poster} alt="blank" />
                    </div>
                    <div className="card-content">
                        <h3>ESC 2023</h3>
                        <div className="card-footer">
                            <span className="status completed">Completed</span>
                            <button className="view-btn">
                                <Link to="/CurrentSeason">VIEW</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card main-card">
                    <div className="card-image">
                        <img src={Poster} alt="blank" />
                    </div>
                    <div className="card-content">
                        <h3>ESC 2026</h3>
                        <p className="description">Description</p>
                        <div className="card-footer">
                            <span className="status in-progress">In progress</span>
                            <button className="view-btn">
                                <Link to="/CurrentSeason">VIEW</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card side-card">
                    <div className="card-image">
                        <img src={Poster} alt="blank" />
                    </div>
                    <div className="card-content">
                        <h3>ESC 2025</h3>
                        <div className="card-footer">
                            <span className="status completed">Completed</span>
                            <button className="view-btn">
                                <Link to="/CurrentSeason">VIEW</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Season;