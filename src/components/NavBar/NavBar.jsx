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
                <a href="#">Home</a>
                </li>
                <li>
                <a href="#">Giới thiệu</a>
                </li>
                <li>
                <a href="#">Hoạt động</a>
                </li>
                <li>
                <a href="#">Tuyển thành viên</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
