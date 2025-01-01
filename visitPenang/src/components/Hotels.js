import React from "react";
import "./Hotels.css";

const Hotels = () => {
    const hotels = [
        {
            title: "槟城香格里拉沙洋度假村",
            description: "豪华的海滨度假村，提供世界一流的设施与服务。",
            image: "/images/shangri-la-hotel.jpg"
        },
        {
            title: "槟城东方大酒店",
            description: "历史悠久的豪华酒店，位于乔治市核心地段。",
            image: "/images/eastern-and-oriental-hotel.jpg"
        },
        {
            title: "槟城湾景酒店",
            description: "位于巴都丁宜海滩的现代化酒店，适合家庭出游。",
            image: "/images/bayview-hotel.jpg"
        }
    ];

    return (
        <section className="hotels">
            <h2>推荐酒店</h2>
            <div className="hotels-list">
                {hotels.map((hotel, index) => (
                    <div className="hotel-card" key={index}>
                        <img src={hotel.image} alt={hotel.title} />
                        <div className="hotel-info">
                            <h3>{hotel.title}</h3>
                            <p>{hotel.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hotels;