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
        "char-kway-teow": {
            title: "炒粿条",
            image: "/images/char-kway-teow.jpg",
            description: "炒粿条是经典的槟城街头美食，采用扁米粉与海鲜、豆芽、鸡蛋和酱油炒制而成，口感丰富，风味独特。"
        },
        "nasi-lemak": {
            title: "椰浆饭",
            image: "/images/nasi-lemak.jpg",
            description: "椰浆饭是马来西亚传统美食，配有香喷喷的椰浆饭、咖喱鸡、黄瓜片、煮鸡蛋和辣酱，风味十足。"
        },
        "teochew-cendol": {
            title: "潮州煎蕊",
            image: "/images/teochew-cendol.jpg",
            description: "这道传统的小吃以米粉为基础，配上浓郁的汤底，口感独特。"
        },
        "curry-noodles": {
            title: "咖喱面",
            image: "/images/curry-noodles.jpg",
            description: "槟城的咖喱面是不可错过的美食，香辣的咖喱和滑嫩的面条相得益彰。"
        },
        "teh-tarik": {
            title: "拉茶",
            image: "/images/teh-tarik.jpg",
            description: "槟城的拉茶有着独特的味道，奶香与茶香的完美结合，暖胃又解渴。"
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
