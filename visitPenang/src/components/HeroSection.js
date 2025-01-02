import React, { useRef, useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
    // 使用useRef来获取video元素
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true); // 控制视频播放/暂停状态
    const [isMuted, setIsMuted] = useState(true); // 控制静音状态

    // 播放或暂停视频
    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying); // 切换播放状态
    };

    // 切换静音
    const toggleMute = () => {
        setIsMuted(!isMuted); // 切换静音状态
        videoRef.current.muted = !isMuted;
    };

    return (
        <div className="hero-section">
            {/* 背景视频 */}
            <video ref={videoRef} autoPlay loop muted={isMuted} className="background-video">
                <source src="/videos/penang_video.mp4" type="video/mp4" />
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
