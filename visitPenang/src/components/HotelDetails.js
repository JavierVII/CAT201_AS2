import React from "react";
import { useParams } from "react-router-dom";
import "./HotelDetails.css"; // 引入CSS文件

const HotelDetails = () => {
    const { hotelId } = useParams();

    const hotelDetails = {
        "shangri-la-rasa-sayang": {
            title: "Shangri-La Rasa Sayang Resort & Spa",
            image: `${process.env.PUBLIC_URL}/images/shangri-la-hotel.jpg`,
            description: "Shangri-La Rasa Sayang Resort & Spa, located on Batu Ferringhi Beach in Penang, Malaysia, is a luxurious five-star resort that blends modern elegance with traditional Malay architecture.",
            address: "Batu Ferringhi Beach, 11100 Batu Ferringhi, Penang, Malaysia",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.5956418420187!2d100.25103267544526!3d5.478133494501591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304add523e0df915%3A0xc0160e34a07074fc!2sShangri-La's%20Rasa%20Sayang%20Resort%20%26%20Spa!5e0!3m2!1sen!2smy!4v1735934246075!5m2!1sen!2smy"
        },
        "eastern-and-oriental-hotel": {
            title: "Eastern & Oriental Hotel",
            image: `${process.env.PUBLIC_URL}/images/eastern-and-oriental-hotel.jpg`,
            description: "The Eastern & Oriental Hotel, located in the heart of George Town, Penang, is a historic luxury hotel that embodies timeless elegance and colonial charm.",
            address: "10, Lebuh Farquhar, 10200 George Town, Penang, Malaysia",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.253702919874!2d100.33333331447691!3d5.420240394960002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac4043fa5e4e9%3A0xe92646456a4d1e42!2sEastern%20and%20Oriental%20Hotel!5e0!3m2!1sen!2smy!4v1690021951626!5m2!1sen!2smy"
        },
        "bayview-hotel": {
            title: "Bayview Hotel Georgetown Penang",
            image: `${process.env.PUBLIC_URL}/images/bayview-hotel.jpg`,
            description: "Bayview Hotel, situated in the heart of George Town, Penang, offers a comfortable and affordable stay with easy access to the city's UNESCO World Heritage sites.",
            address: "25-A Farquhar Street, 10200 George Town, Penang, Malaysia",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.333333919874!2d100.33333331447691!3d5.420240394960002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac4043fa5e4e9%3A0xe92646456a4d1e42!2sBayview%20Hotel!5e0!3m2!1sen!2smy!4v1690021951626!5m2!1sen!2smy"
        },
        "hilton-doubletree-resort": {
            title: "DoubleTree Resort by Hilton Penang",
            image: `${process.env.PUBLIC_URL}/images/hilton-doubletree-resort.jpg`,
            description: "Hilton DoubleTree Resort, located along the tranquil Batu Ferringhi Beach in Penang, offers a perfect blend of modern comfort and scenic beauty.",
            address: "56 Jalan Low Yat, 11100 Batu Ferringhi, Penang, Malaysia",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.333333919874!2d100.33333331447691!3d5.420240394960002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac4043fa5e4e9%3A0xe92646456a4d1e42!2sDoubleTree%20Hotel!5e0!3m2!1sen!2smy!4v1690021951626!5m2!1sen!2smy"
        },
        "george-hotel": {
            title: "The George Hotel",
            image: `${process.env.PUBLIC_URL}/images/george-hotel.jpg`,
            description: "George Hotel, located in the vibrant heart of George Town, Penang, offers a modern and comfortable retreat for travelers.",
            address: "38 Jalan Magazine, 10300 George Town, Penang, Malaysia",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.333333919874!2d100.33333331447691!3d5.420240394960002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac4043fa5e4e9%3A0xe92646456a4d1e42!2sGeorge%20Hotel!5e0!3m2!1sen!2smy!4v1690021951626!5m2!1sen!2smy"
        },
        "macalister-mansion": {
            title: "Macalister Mansion",
            image: `${process.env.PUBLIC_URL}/images/macalister-mansion.jpg`,
            description: "Macalister Mansion, located in the heart of George Town, Penang, is a unique and luxurious boutique hotel that seamlessly blends heritage charm with contemporary design.",
            address: "228, Jalan Macalister, 10400 George Town, Penang, Malaysia",
            mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.253702919874!2d100.32522001447691!3d5.420240394960002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac403eaf37e7f%3A0x22e6a57bfa06a47c!2sMacalister%20Mansion!5e0!3m2!1sen!2smy!4v1690021951626!5m2!1sen!2smy"
        },
    };

    const hotel = hotelDetails[hotelId];

    return (
        <div className="hotel-details">
            {hotel ? (
                <div>
                    <h2>{hotel.title}</h2>
                    <img src={hotel.image} alt={hotel.title} />
                    <p>{hotel.description}</p>
                    <p><strong>Address:</strong> {hotel.address}</p>
                    <div className="map-container">
                        <iframe
                            src={hotel.mapLink}
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            ) : (
                <p>No relevant hotel information found.</p>
            )}
        </div>
    );
};

export default HotelDetails;