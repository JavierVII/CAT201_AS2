import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import TouristSpots from "./components/TouristSpots";
import FoodAndBeverages from "./components/FoodAndBeverages";
import Hotels from "./components/Hotels";
import TouristSpotDetails from "./components/TouristSpotDetails";
import FoodDetails from "./components/FoodDetails";
import HotelDetails from "./components/HotelDetails";
import ContactUs from "./components/ContactUs";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tourist-spots" element={<TouristSpots />} />
                    <Route path="/food-and-beverages" element={<FoodAndBeverages />} />
                    <Route path="/hotels" element={<Hotels />} />
                    <Route path="/tourist-spots/:spotId" element={<TouristSpotDetails />} />
                    <Route path="/food-and-beverages/:foodId" element={<FoodDetails />} />
                    <Route path="/hotels/:hotelId" element={<HotelDetails />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
