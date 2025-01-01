import React from "react";
import "./FoodAndBeverages.css";

const FoodAndBeverages = () => {
    const foods = [
        {
            title: "槟城叻沙",
            description: "槟城的招牌美食，以浓郁的鱼汤和酸辣口味闻名。",
            image: "/images/penang-laksa.jpg"
        },
        {
            title: "炒粿条",
            description: "经典的槟城街头美食，用扁米粉与海鲜和豆芽炒制而成。",
            image: "/images/char-kway-teow.jpg"
        },
        {
            title: "椰浆饭",
            description: "配有香喷喷椰浆饭、咖喱鸡和辣酱的传统马来美食。",
            image: "/images/nasi-lemak.jpg"
        }
    ];

    return (
        <section className="food-and-beverages">
            <h2>槟城美食与饮料</h2>
            <div className="food-list">
                {foods.map((food, index) => (
                    <div className="food-card" key={index}>
                        <img src={food.image} alt={food.title} />
                        <div className="food-info">
                            <h3>{food.title}</h3>
                            <p>{food.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FoodAndBeverages;
