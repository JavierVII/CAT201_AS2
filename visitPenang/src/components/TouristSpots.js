import React from "react";
import { Link } from "react-router-dom";
import "./TouristSpots.css";

const TouristSpots = ({ filter }) => {
    const spots = [
        {
            id: "penang-hill",
            title: "槟城升旗山",
            description: "享受槟城的全景，体验丰富的历史和自然景观。",
            image: "/images/penang-hill.jpg"
        },
        {
            id: "george-town",
            title: "槟城乔治市",
            description: "探索槟城的文化遗产区，欣赏美丽的街头艺术。",
            image: "/images/george-town.jpg"
        },
        {
            id: "kek-lok-si",
            title: "槟城极乐寺",
            description: "参观槟城最著名的佛教寺庙之一，享受宁静的氛围。",
            image: "/images/kek-lok-si-temple.jpg"
        },
        {
            id: "nyonya-museum",
            title: "槟城娘惹博物馆",
            description: "了解槟城独特的娘惹文化和历史。",
            image: "/images/nyonya-museum.jpg"
        },
        {
            id: "chew-jetty",
            title: "姓周桥",
            description: "体验槟城水上木屋村落的传统生活。",
            image: "/images/chew-jetty.jpg"
        },
        {
            id: "batu-feringgi",
            title: "巴都丁宜",
            description: "放松身心，享受槟城最著名的海滩之一。",
            image: "/images/batu-feringgi.jpg"
        }
    ];

    // 筛选景点（如果提供了 filter，则只显示匹配的景点）
    const filteredSpots = filter
        ? spots.filter((spot) => filter.includes(spot.id))
        : spots;

    return (
        <section className="tourist-spots">
            <h2>槟城旅游景点</h2>
            <div className="spots-list">
                {filteredSpots.map((spot) => (
                    <div className="spot-card" key={spot.id}>
                        <Link to={`/tourist-spots/${spot.id}`}>
                            <img src={spot.image} alt={spot.title} />
                            <div className="spot-info">
                                <h3>{spot.title}</h3>
                                <p>{spot.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TouristSpots;
