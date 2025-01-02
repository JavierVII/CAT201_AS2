import React from "react";
import { Link } from "react-router-dom";
import "./FoodAndBeverages.css";

const FoodAndBeverages = ({ filter }) => {
    const foods = [
        {
            id: "asam-laksa",
            title: "asam-laksa",
            description: "Penang Laksa is a vibrant and tangy fish-based noodle soup, celebrated for its rich, spicy broth.",
            image: "/images/penang-laksa.jpg"
        },
        {
            id: "char-kway-teow",
            title: "char-kway-teow",
            description: "Fried kuey teow is a classic street food in Penang, a perfect blend of rice noodles, egg and prawns.",
            image: "/images/char-kway-teow.jpg"
        },
        {
            id: "nasi-lemak",
            title: "nasi-lemak",
            description: "Coconut rice is a traditional Malaysian dish served with flavourful coconut milk and side dishes.",
            image: "/images/nasi-lemak.jpg"
        },
        {
            id: "teochew-cendol",
            title: "teochew-cendol",
            description: "This traditional snack is based on rice vermicelli with a rich soup base.",
            image: "/images/teochew-cendol.jpg"
        },
        {
            id: "curry-noodles",
            title: "curry-noodles",
            description: "Penang's curry noodles are a must-try delicacy, with the spicy curry complementing the smooth and tender noodles.",
            image: "/images/curry-noodles.jpg"
        },
        {
            id: "teh-tarik",
            title: "teh-tarik",
            description: "Penang's laksa has a unique flavour, a perfect combination of milk and tea, warming the stomach and quenching the thirst.",
            image: "/images/teh-tarik.jpg"
        }
    ];

    // 筛选美食（如果提供了 filter，则只显示匹配的美食）
    const filteredFoods = filter
        ? foods.filter((food) => filter.includes(food.id))
        : foods;

    return (
        <section className="food-and-beverages">
            <h2>Penang Food & Drink</h2>
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
