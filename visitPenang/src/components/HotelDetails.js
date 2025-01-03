import React from "react";
import { useParams } from "react-router-dom";
import "./HotelDetails.css";  // 引入CSS文件

const HotelDetails = () => {
    const { hotelId } = useParams();

    const hotelDetails = {
        "shangri-la-rasa-sayang": {
            title: "Shangri-la-rasa-sayang",
            image: "/images/shangri-la-hotel.jpg",
            description: "Shangri-La Rasa Sayang Resort & Spa, located on Batu Ferringhi Beach in Penang, Malaysia, is a luxurious five-star resort that blends modern elegance with traditional Malay architecture. Surrounded by lush tropical gardens, the resort offers spacious and comfortable accommodations, world-class dining options, a luxurious spa, and an infinity pool. Whether for a family getaway or a romantic retreat, the resort provides guests with an unforgettable experience through its impeccable service and stunning beachfront setting."
        },
        "eastern-and-oriental-hotel": {
            title: "Eastern-and-oriental-hotel",
            image: "/images/eastern-and-oriental-hotel.jpg",
            description: "The Eastern & Oriental Hotel, located in the heart of George Town, Penang, is a historic luxury hotel that embodies timeless elegance and colonial charm. Established in 1885, this iconic waterfront property offers spacious suites with modern amenities, fine dining restaurants, and an inviting infinity pool overlooking the Straits of Malacca. Renowned for its impeccable service and rich heritage, the hotel provides a unique blend of old-world sophistication and contemporary comfort, making it a perfect destination for both leisure and business travelers."
        },
        "bayview-hotel": {
            title: "Bayview-hotel",
            image: "/images/bayview-hotel.jpg",
            description: "Bayview Hotel, situated in the heart of George Town, Penang, offers a comfortable and affordable stay with easy access to the city's UNESCO World Heritage sites, shopping, and dining. The hotel features well-appointed rooms, a rooftop restaurant with panoramic views, and a range of facilities including a swimming pool and fitness center. With its central location and friendly service, Bayview Hotel is an ideal choice for travelers seeking convenience and value during their visit to Penang."
        },
        "hilton-doubletree-resort": {
            title: "Hilton-doubletree-resort",
            image: "/images/hilton-doubleTree-resort.jpg",
            description: "Hilton DoubleTree Resort, located along the tranquil Batu Ferringhi Beach in Penang, offers a perfect blend of modern comfort and scenic beauty. The resort features stylish rooms and suites, many with private balconies overlooking the sea or lush gardens. Guests can enjoy a variety of dining options, a lagoon-style swimming pool, and family-friendly amenities, including a kids' club and direct beach access. Renowned for its warm hospitality and signature DoubleTree cookies upon arrival, the resort provides a relaxing and memorable escape for both leisure and business travelers."
        },
        "george-hotel": {
            title: "George-hotel",
            image: "/images/george-hotel.jpg",
            description: "George Hotel, located in the vibrant heart of George Town, Penang, offers a modern and comfortable retreat for travelers exploring the city's UNESCO World Heritage sites. The hotel features stylishly designed rooms equipped with essential amenities, a rooftop pool with city views, and a cozy café serving local and international dishes. With its central location, friendly service, and easy access to cultural landmarks, shopping, and dining, George Hotel is an excellent choice for both leisure and business visitors seeking convenience and value."
        },
        "macalister-mansion": {
            title: "Macalister-mansion",
            image: "/images/macalister-mansion.jpg",
            description: "Macalister Mansion, located in the heart of George Town, Penang, is a unique and luxurious boutique hotel that seamlessly blends heritage charm with contemporary design. Set in a restored colonial mansion, the hotel features individually themed suites, a fine dining restaurant, an intimate wine lounge, and a stylish outdoor pool. With its personalized service, artistic ambiance, and central location, Macalister Mansion offers an exclusive and memorable stay for guests seeking sophistication and a touch of Penang’s rich history."
        }
    };

    const hotel = hotelDetails[hotelId];

    return (
        <div className="hotel-details">
            {hotel ? (
                <div>
                    <h2>{hotel.title}</h2>
                    <img src={hotel.image} alt={hotel.title} />
                    <p>{hotel.description}</p>
                </div>
            ) : (
                <p>No relevant hotel information found.</p>
            )}
        </div>
    );
};

export default HotelDetails;
