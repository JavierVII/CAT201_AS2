import React, { useState } from "react";
import "./Header.css";

const Header = () => {
    const [hoveredMenu, setHoveredMenu] = useState(null);

    // 子菜单数据
    const menuData = {
        "𝑻𝒐𝒖𝒓𝒊𝒔𝒕 𝑺𝒑𝒐𝒕𝒔": ["𝑷𝒆𝒏𝒂𝒏𝒈 𝑯𝒊𝒍𝒍", "𝑮𝒆𝒐𝒓𝒈𝒆 𝑻𝒐𝒘𝒏", "𝑲𝒆𝒌 𝑳𝒐𝒌 𝑺𝒊"],
        "𝒇𝒐𝒐𝒅 & 𝒃𝒆𝒗𝒆𝒓𝒂𝒈𝒆𝒔": ["𝑨𝒔𝒂𝒎 𝑳𝒂𝒌𝒔𝒂", "𝑵𝒂𝒔𝒊 𝑳𝒆𝒎𝒂𝒌", "𝒄𝒉𝒂𝒓 𝒌𝒖𝒆𝒚 𝒕𝒆𝒐𝒘"],
        "𝑯𝒐𝒕𝒆𝒍": ["𝑺𝒉𝒂𝒏𝒈𝒓𝒊-𝑳𝒂 𝑹𝒂𝒔𝒂 𝑺𝒂𝒚𝒂𝒏𝒈", "𝑬𝒂𝒔𝒕𝒆𝒓𝒏&𝑶𝒓𝒊𝒆𝒏𝒕𝒂𝒍 𝑯𝒐𝒕𝒆𝒍", "𝑩𝒂𝒚𝒗𝒊𝒆𝒘 𝑯𝒐𝒕𝒆𝒍"]
    };

    return (
        <header className="header">
            <div className="logo">𝓥𝓲𝓼𝓲𝓽 𝓟𝓮𝓷𝓪𝓷𝓰</div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">𝑯𝒐𝒎𝒆 𝒑𝒂𝒈𝒆</a></li>

                    {/* 添加子菜单功能 */}
                    {Object.keys(menuData).map((menu) => (
                        <li
                            key={menu}
                            className="dropdown-item"
                            onMouseEnter={() => setHoveredMenu(menu)}
                            onMouseLeave={() => setHoveredMenu(null)}
                        >
                            <a href={`#${menu.toLowerCase().replace(/\s/g, '')}`}>{menu}</a>
                            {/* 子菜单 */}
                            {hoveredMenu === menu && (
                                <ul className="dropdown-menu">
                                    {menuData[menu].map((item, index) => (
                                        <li key={index} className="dropdown-subitem">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}

                    <li><a href="#contact">𝑪𝒐𝒏𝒕𝒂𝒄𝒕 𝑼𝑺</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
