import React from "react";
import { Link } from "react-router-dom";
import "./Hotels.css";

const Hotels = ({ filter }) => {
    const hotels = [
        {
            id: "shangri-la-rasa-sayang",
            title: "shangri-la-rasa-sayang",
            description: "A luxurious resort offering tranquility and comfort.",
            image: `${process.env.PUBLIC_URL}/images/shangri-la-hotel.jpg`
        },
        {
            id: "eastern-and-oriental-hotel",
            title: "Eastern & Oriental Hotel,",
            description:"A historic hotel that blends modernity with tradition.",
            image: `${process.env.PUBLIC_URL}/images/eastern-and-oriental-hotel.jpg`
        },
        {
            id: "bayview-hotel",
            title: "Bayview Hotel",
            description: "Overlooking the stunning views of Penang Bay, offering a luxurious stay experience.",
            image: `${process.env.PUBLIC_URL}/images/bayview-hotel.jpg`
        },
        {
            id: "hilton-doubletree-resort",
            title: "Hilton-doubletree-resort",
            description: "A modern business hotel offering convenient amenities.",
            image: `${process.env.PUBLIC_URL}/images/hilton-doubletree-resort.jpg`
        },
        {
            id: "george-hotel",
            title: "George Hotel",
            description: "A historic hotel located in the heart of George Town.",
            image: `${process.env.PUBLIC_URL}/images/george-hotel.jpg`
        },
        {
            id: "macalister-mansion",
            title: "McAllister Manor Hotel",
            description: "An elegant manor hotel, offering a unique lodging experience.",
            image: `${process.env.PUBLIC_URL}/images/macalister-mansion.jpg`
        }
    ];

    // 筛选酒店（如果提供了 filter，则只显示匹配的酒店）
    const filteredHotels = filter
        ? hotels.filter((hotel) => filter.includes(hotel.id))
        : hotels;

    return (
        <section className="hotels">
            <h2>Penang Hotel</h2>
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