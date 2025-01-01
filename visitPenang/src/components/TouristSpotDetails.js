import React from "react";
import { useParams } from "react-router-dom";
import "./TouristSpotDetails.css";  // 引入CSS文件

const TouristSpotDetails = () => {
    const { spotId } = useParams();

    const spotDetails = {
        "penang-hill": {
            title: "槟城升旗山",
            image: "/images/penang-hill.jpg",
            description: "槟城升旗山是槟城最著名的景点之一，拥有丰富的历史和自然景观。您可以乘坐缆车到达山顶，欣赏槟城的全景。"
        },
        "george-town": {
            title: "槟城乔治市",
            image: "/images/george-town.jpg",
            description: "槟城乔治市是一个充满文化气息的地方，您可以在这里探索历史悠久的建筑和美丽的街头艺术。"
        },
        "kek-lok-si": {
            title: "槟城极乐寺",
            image: "/images/kek-lok-si-temple.jpg",
            description: "槟城极乐寺是东南亚最大的佛教寺庙之一，提供一个宁静的氛围和美丽的景观。"
        }
    };

    const spot = spotDetails[spotId];

    return (
        <div className="tourist-spot-details">
            {spot ? (
                <div>
                    <h2>{spot.title}</h2>
                    <img src={spot.image} alt={spot.title} />
                    <p>{spot.description}</p>
                </div>
            ) : (
                <p>未找到相关景点信息。</p>
            )}
        </div>
    );
};

export default TouristSpotDetails;
