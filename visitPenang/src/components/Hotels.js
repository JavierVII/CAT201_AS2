import React from "react";
import { Link } from "react-router-dom";
import "./Hotels.css";

const Hotels = ({ filter }) => {
    const hotels = [
        {
            id: "shangri-la-rasa-sayang",
            title: "槟城香格里拉沙洋度假村",
            description: "豪华度假村，享受宁静与舒适。",
            image: "/images/shangri-la-hotel.jpg"
        },
        {
            id: "eastern-and-oriental-hotel",
            title: "槟城东方大酒店",
            description: "历史悠久的酒店，融合了现代与传统。",
            image: "/images/eastern-and-oriental-hotel.jpg"
        },
        {
            id: "bayview-hotel",
            title: "槟城湾景酒店",
            description: "俯瞰槟城湾的美丽景色，提供豪华的住宿体验。",
            image: "/images/bayview-hotel.jpg"
        },
        {
            id: "hilton-doubletree-resort",
            title: "希尔顿逸林酒店",
            description: "现代化的商务酒店，提供便利的设施。",
            image: "/images/hilton-doubletree-resort.jpg"
        },
        {
            id: "george-hotel",
            title: "乔治酒店",
            description: "充满历史感的酒店，位于乔治市中心。",
            image: "/images/george-hotel.jpg"
        },
        {
            id: "macalister-mansion",
            title: "麦卡利斯特庄园酒店",
            description: "优雅的庄园酒店，享受独特的住宿体验。",
            image: "/images/macalister-mansion.jpg"
        }
    ];

    // 筛选酒店（如果提供了 filter，则只显示匹配的酒店）
    const filteredHotels = filter
        ? hotels.filter((hotel) => filter.includes(hotel.id))
        : hotels;

    return (
        <section className="hotels">
            <h2>槟城酒店</h2>
            <div className="hotels-list">
                {filteredHotels.map((hotel) => (
                    <div className="hotel-card" key={hotel.id}>
                        <Link to={`/hotels/${hotel.id}`}>
                            <img src={hotel.image} alt={hotel.title} />
                            <div className="hotel-info">
                                <h3>{hotel.title}</h3>
                                <p>{hotel.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hotels;
