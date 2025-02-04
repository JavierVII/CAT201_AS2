import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [hoveredMenu, setHoveredMenu] = useState(null);

    const menuData = {
        "Tourist Spots": ["Penang Hill", "George Town", "Kek Lok Si", "Nyonya Museum", "Chew Jetty", "Batu Feringgi"],
        "Food and Beverages": ["Asam Laksa", "Char Kway Teow", "Nasi Lemak", "Teochew Cendol", "Curry Noodles", "Teh Tarik"],
        "Hotels": ["Shangri-La Rasa Sayang", "Eastern and Oriental Hotel", "Bayview Hotel", "Hilton Doubletree Resort", "George Hotel", "Macalister Mansion"]
    };

    return (
        <header className="header">
            <div className="logo">Visit Penang</div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home Page</Link></li>
                    {Object.keys(menuData).map((menu) => (
                        <li
                            key={menu}
                            className="dropdown-item"
                            onMouseEnter={() => setHoveredMenu(menu)}
                            onMouseLeave={() => setHoveredMenu(null)}
                        >
                            <Link to={`/${menu.toLowerCase().replace(/\s/g, '-')}`}>{menu}</Link>
                            {hoveredMenu === menu && (
                                <ul className="dropdown-menu">
                                    {menuData[menu].map((item, index) => (
                                        <li key={index} className="dropdown-subitem">
                                            <Link to={`/${menu.toLowerCase().replace(/\s/g, '-')}/${item.toLowerCase().replace(/\s/g, '-')}`}>{item}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
