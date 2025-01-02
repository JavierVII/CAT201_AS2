import React from "react";
import { useParams } from "react-router-dom";
import "./HotelDetails.css";  // 引入CSS文件

const HotelDetails = () => {
    const { hotelId } = useParams();

    const hotelDetails = {
        "shangri-la-rasa-sayang": {
            title: "槟城香格里拉沙洋度假村",
            image: "/images/shangri-la-hotel.jpg",
            description: "豪华度假村，享受宁静与舒适，拥有多个餐厅、游泳池和水疗中心。"
        },
        "eastern-and-oriental-hotel": {
            title: "槟城东方大酒店",
            image: "/images/eastern-and-oriental-hotel.jpg",
            description: "历史悠久的酒店，融合了现代与传统，提供豪华的住宿体验和完美的服务。"
        },
        "bayview-hotel": {
            title: "槟城湾景酒店",
            image: "/images/bayview-hotel.jpg",
            description: "俯瞰槟城湾的美丽景色，提供豪华的住宿和各种娱乐设施。"
        },
        "hilton-doubletree-resort": {
            title: "希尔顿逸林酒店",
            image: "/images/hilton-doubleTree-resort.jpg",
            description: "现代化的商务酒店，提供便利的设施和优质的服务。"
        },
        "george-hotel": {
            title: "乔治酒店",
            image: "/images/george-hotel.jpg",
            description: "充满历史感的酒店，位于乔治市中心，便于探索槟城的文化和历史。"
        },
        "macalister-mansion": {
            title: "麦卡利斯特庄园酒店",
            image: "/images/macalister-mansion.jpg",
            description: "优雅的庄园酒店，提供独特的住宿体验和豪华的设施。"
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
