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

            {/* 文字内容 */}
            <div className="hero-content">
                <h1>欢迎来到槟城</h1>
                <p>探索这座美丽岛屿的魅力、文化与美食。</p>
            </div>
        </div>
    );
};

export default HeroSection;