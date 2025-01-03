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
                    <h1>WELCOME TO PENANG</h1>
                    <h1>Selamat datang ke Pulau Pinang</h1>
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
