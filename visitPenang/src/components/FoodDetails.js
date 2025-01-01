import React from "react";
import { useParams } from "react-router-dom";
import "./FoodDetails.css";  // 引入CSS文件

const FoodDetails = () => {
    const { foodId } = useParams();

    const foodDetails = {
        "asam-laksa": {
            title: "槟城叻沙",
            image: "/images/penang-laksa.jpg",
            description: "槟城叻沙是槟城的招牌美食，以浓郁的鱼汤和酸辣口味闻名。它是由鱼肉、米粉、香草和酸辣调料制成的美味汤面。"
        },
        "char-kuey-teow": {
            title: "炒粿条",
            image: "/images/char-kway-teow.jpg",
            description: "炒粿条是经典的槟城街头美食，采用扁米粉与海鲜、豆芽、鸡蛋和酱油炒制而成，口感丰富，风味独特。"
        },
        "nasi-lemak": {
            title: "椰浆饭",
            image: "/images/nasi-lemak.jpg",
            description: "椰浆饭是马来西亚传统美食，配有香喷喷的椰浆饭、咖喱鸡、黄瓜片、煮鸡蛋和辣酱，风味十足。"
        }
    };

    const food = foodDetails[foodId];

    return (
        <div className="food-details">
            {food ? (
                <div>
                    <h2>{food.title}</h2>
                    <img src={food.image} alt={food.title} />
                    <p>{food.description}</p>
                </div>
            ) : (
                <p>未找到相关美食信息。</p>
            )}
        </div>
    );
};

export default FoodDetails;
