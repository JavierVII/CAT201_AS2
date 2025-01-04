import React, { useRef, useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
        videoRef.current.muted = !isMuted;
    };

    return (
        <div className="hero-section">
            {/* 背景视频 */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted}
                className="background-video"
            >
                <source
                    src={`${process.env.PUBLIC_URL}/videos/penang_video.mp4`}
                    type="video/mp4"
                />
                您的浏览器不支持视频播放。
            </video>

            {/* 控制按钮 */}
            <div className="controls">
                <button onClick={togglePlayPause}>
                    {isPlaying ? "⏸️" : "▶️"}
                </button>
                <button onClick={toggleMute}>
                    {isMuted ? "🔇" : "🔊"}
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
