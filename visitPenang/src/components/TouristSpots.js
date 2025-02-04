import React from "react";
import { Link } from "react-router-dom";
import "./TouristSpots.css";

const TouristSpots = ({ filter }) => {
    const spots = [
        {
            id: "penang-hill",
            title: "Penang Hill",
            description: "Enjoy the panoramic views of Penang, and experience its rich history and natural landscapes.",
            image: `${process.env.PUBLIC_URL}/images/penang-hill.jpg`
        },
        {
            id: "george-town",
            title: "George Town",
            description: "Explore Penang's cultural heritage zone and admire the beautiful street art.",
            image: `${process.env.PUBLIC_URL}/images/george-town.jpg`
        },
        {
            id: "kek-lok-si",
            title: "kek-lok-si",
            description: "Visit one of Penang's most famous Buddhist temples and enjoy the tranquil atmosphere.",
            image: `${process.env.PUBLIC_URL}/images/kek-lok-si-temple.jpg`
        },
        {
            id: "nyonya-museum",
            title: "nyonya-museum",
            description: "Learn about Penang's unique Peranakan culture and history.",
            image: `${process.env.PUBLIC_URL}/images/nyonya-museum.jpg`
        },
        {
            id: "chew-jetty",
            title: "chew-jetty",
            description: "Experience the traditional life of Penang's water village with wooden stilt houses.",
            image: `${process.env.PUBLIC_URL}/images/chew-jetty.jpg`
        },
        {
            id: "batu-feringgi",
            title: "Batu Ferringhi",
            description: "Relax and unwind at one of Penang's most famous beaches.",
            image: `${process.env.PUBLIC_URL}/images/batu-feringgi.jpg`
        }
    ];

    // 筛选景点（如果提供了 filter，则只显示匹配的景点）
    const filteredSpots = filter
        ? spots.filter((spot) => filter.includes(spot.id))
        : spots;

    return (
        <section className="tourist-spots">
            <h2>Penang Tourist Attractions</h2>
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