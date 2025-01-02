import React from "react";
import HeroSection from "./HeroSection";
import TouristSpots from "./TouristSpots";
import FoodAndBeverages from "./FoodAndBeverages";
import Hotels from "./Hotels";

const Home = () => {
    return (
        <>
            <HeroSection />
            <main>
                <section id="home">
                    <h1>欢迎来到槟城</h1>
                    <p>探索这座美丽的岛屿及其多样的文化与美食。</p>
                </section>
                <section id="tourist-spots">
                    {/* 只显示指定的景点 */}
                    <TouristSpots filter={["penang-hill", "george-town", "kek-lok-si"]} />
                </section>
                <section id="food-and-beverages">
                    {/* 只显示指定的美食 */}
                    <FoodAndBeverages filter={["asam-laksa", "char-kway-teow", "nasi-lemak"]} />
                </section>
                <section id="hotels">
                    {/* 只显示指定的酒店 */}
                    <Hotels filter={["shangri-la-rasa-sayang", "eastern-and-oriental-hotel", "bayview-hotel"]} />
                </section>
            </main>
        </>
    );
};

export default Home;
