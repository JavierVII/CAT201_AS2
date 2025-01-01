import React from "react";
import { useParams } from "react-router-dom";
import "./HotelDetails.css";  // 引入CSS文件

const HotelDetails = () => {
    const { hotelId } = useParams();

    const hotelDetails = {
        "shangri-la-rasa-sayang": {
            title: "槟城香格里拉沙洋度假村",
            image: "/images/shangri-la-hotel.jpg",
            description: "槟城香格里拉沙洋度假村是一个豪华的海滨度假村，提供世界一流的设施与服务，包括宽敞的客房、多个餐饮选择和一个壮丽的海滩。"
        },
        "eastern-and-oriental-hotel": {
            title: "槟城东方大酒店",
            image: "/images/eastern-and-oriental-hotel.jpg",
            description: "槟城东方大酒店是历史悠久的豪华酒店，位于乔治市核心地段，提供优雅的住宿环境和一流的服务。"
        },
        "bayview-hotel": {
            title: "槟城湾景酒店",
            image: "/images/bayview-hotel.jpg",
            description: "槟城湾景酒店位于巴都丁宜海滩，是一个现代化的酒店，适合家庭出游，提供多种设施和优质服务。"
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
                <p>未找到相关酒店信息。</p>
            )}
        </div>
    );
};

export default HotelDetails;
