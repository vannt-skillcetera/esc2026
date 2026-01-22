import React from "react";
import "./Navbar.css"; // Kết nối với file trang điểm
import Logo from "../../assets/Logo.png";
const Navbar = () => {
    return (
        <nav className="navBar">
            {/* 1. Logo CLB */}
            <div className="navBar-Logo">
                <img src={Logo} alt="" />
            </div>

            {/* 2. Danh sách các link (Menu) */}
            <ul className="navBar-Links">
                <li>
                <a href="#">HOME</a>
                </li>
                <li>
                <a href="#">ABOUT</a>
                </li>
                <li>
                <a href="#">SEASONS</a>
                </li>
                <li>
                <a href="#">PARTNERS</a>
                </li>
                <li>
                <a href="#">CONTACT</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
