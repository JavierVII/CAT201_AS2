import React from "react";
import { Link } from "react-router-dom";
import "./FoodAndBeverages.css";

const FoodAndBeverages = ({ filter }) => {
    const foods = [
        {
            id: "asam-laksa",
            title: "槟城叻沙",
            description: "槟城叻沙是槟城的代表性美食之一，汤底浓郁、酸辣可口。",
            image: "/images/penang-laksa.jpg"
        },
        {
            id: "char-kway-teow",
            title: "炒粿条",
            description: "炒粿条是槟城的经典街头美食，米粉、蛋和虾的完美融合。",
            image: "/images/char-kway-teow.jpg"
        },
        {
            id: "nasi-lemak",
            title: "椰浆饭",
            description: "椰浆饭是马来西亚的传统美食，搭配香浓的椰浆和配菜。",
            image: "/images/nasi-lemak.jpg"
        },
        {
            id: "teochew-cendol",
            title: "潮州煎蕊",
            description: "这道传统的小吃以米粉为基础，配上浓郁的汤底，口感独特。",
            image: "/images/teochew-cendol.jpg"
        },
        {
            id: "curry-noodles",
            title: "咖喱面",
            description: "槟城的咖喱面是不可错过的美食，香辣的咖喱和滑嫩的面条相得益彰。",
            image: "/images/curry-noodles.jpg"
        },
        {
            id: "teh-tarik",
            title: "拉茶",
            description: "槟城的拉茶有着独特的味道，奶香与茶香的完美结合，暖胃又解渴。",
            image: "/images/teh-tarik.jpg"
        }
    ];

    // 筛选美食（如果提供了 filter，则只显示匹配的美食）
    const filteredFoods = filter
        ? foods.filter((food) => filter.includes(food.id))
        : foods;

    return (
        <section className="food-and-beverages">
            <h2>槟城美食与饮品</h2>
            <div className="food-list">
                {filteredFoods.map((food) => (
                    <div className="food-card" key={food.id}>
                        <Link to={`/food-and-beverages/${food.id}`}>
                            <img src={food.image} alt={food.title} />
                            <div className="food-info">
                                <h3>{food.title}</h3>
                                <p>{food.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FoodAndBeverages;
