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
                    <TouristSpots />
                </section>
                <section id="food-and-beverages">
                    <FoodAndBeverages />
                </section>
                <section id="hotels">
                    <Hotels />
                </section>
            </main>
        </>
    );
};

export default Home;