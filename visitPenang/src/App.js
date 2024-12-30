import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TouristSpots from "./components/TouristSpots";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <TouristSpots />
            <main>
                <section id="home">
                    <h1>欢迎来到槟城</h1>
                    <p>探索这座美丽的岛屿及其多样的文化与美食。</p>
                </section>
            </main>
        </div>
    );
}

export default App;
