import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Visit Penang</div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">首页</a></li>
                    <li><a href="#spots">景点</a></li>
                    <li><a href="#food">美食</a></li>
                    <li><a href="#hotels">酒店</a></li>
                    <li><a href="#contact">联系我们</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
