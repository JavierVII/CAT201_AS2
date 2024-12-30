import React from "react";
import "./TouristSpots.css";

const TouristSpots = () => {
    const spots = [
        {
            title: "槟城升旗山",
            description: "享受槟城的全景，体验丰富的历史和自然景观。",
            image: "/images/penang-hill.jpg"
        },
        {
            title: "槟城乔治市",
            description: "探索槟城的文化遗产区，欣赏美丽的街头艺术。",
            image: "/images/george-town.jpg"
        },
        {
            title: "槟城极乐寺",
            description: "参观槟城最著名的佛教寺庙之一，享受宁静的氛围。",
            image: "/images/kek-lok-si-temple.jpg"
        }
    ];

    return (
        <section className="tourist-spots">
            <h2>槟城旅游景点</h2>
            <div className="spots-list">
                {spots.map((spot, index) => (
                    <div className="spot-card" key={index}>
                        <img src={spot.image} alt={spot.title} />
                        <div className="spot-info">
                            <h3>{spot.title}</h3>
                            <p>{spot.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TouristSpots;
