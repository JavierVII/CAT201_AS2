import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">𝓥𝓲𝓼𝓲𝓽 𝓟𝓮𝓷𝓪𝓷𝓰</div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">𝑯𝒐𝒎𝒆 𝒑𝒂𝒈𝒆</a></li>
                    <li><a href="#spots">𝑻𝒐𝒖𝒓𝒊𝒔𝒕 𝑺𝒑𝒐𝒕𝒔</a></li>
                    <li><a href="#food">𝒇𝒐𝒐𝒅 & 𝒃𝒆𝒗𝒆𝒓𝒂𝒈𝒆𝒔</a></li>
                    <li><a href="#hotels">𝑯𝒐𝒕𝒆𝒍</a></li>
                    <li><a href="#contact">𝑪𝒐𝒏𝒕𝒂𝒄𝒕 𝑼𝑺</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
