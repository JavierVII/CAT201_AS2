import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div className="hero-section">
            {/* 背景视频 */}
            <video autoPlay loop muted className="background-video">
                <source src="/videos/penang_video.mp4" type="video/mp4" />
                您的浏览器不支持视频播放。
            </video>
        </div>
    );
};

export default HeroSection;
