import React from "react";
import { useParams } from "react-router-dom";
import "./TouristSpotDetails.css"; // 引入CSS文件

const TouristSpotDetails = () => {
    const { spotId } = useParams();

    const spotDetails = {
        "penang-hill": {
            title: "Penang Hill",
            image: "/images/penang-hill.jpg",
            description: "槟城升旗山是槟城最著名的景点之一，拥有丰富的历史和自然景观。您可以乘坐缆车到达山顶，欣赏槟城的全景。"
        },
        "george-town": {
            title: "George Town",
            image: "/images/george-town.jpg",
            description: "槟城乔治市是一个充满文化气息的地方，您可以在这里探索历史悠久的建筑和美丽的街头艺术。"
        },
        "kek-lok-si": {
            title: "Kek Lok Si",
            image: "/images/kek-lok-si-temple.jpg",
            description: "槟城极乐寺是东南亚最大的佛教寺庙之一，提供一个宁静的氛围和美丽的景观。"
        },
        "nyonya-museum": {
            title: "Pinang Peranakan Mansion",
            image: "/images/nyonya-museum.jpg",
            description: "槟城娘惹博物馆展示了娘惹文化的丰富遗产，是一个必看的景点，拥有精致的装饰和历史文物。"
        },
        "chew-jetty": {
            title: "Zhou Bridge",
            image: "/images/chew-jetty.jpg",
            description: "姓周桥是槟城最古老的水上村落之一，您可以体验传统的水上人家生活方式。"
        },
        "batu-feringgi": {
            title: "Batu Ferringhi",
            image: "/images/batu-feringgi.jpg",
            description: "巴都丁宜以其美丽的沙滩和水上活动闻名，是一个放松和享受海景的理想场所。"
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
