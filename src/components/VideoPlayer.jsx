import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/logo.svg";
import ZoomImage from "../assets/zoom.svg";
import playImage from "../assets/play.svg";

function VideoPlayer({ src }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speedRate, setSpeedRate] = useState(1);
  const [fullScreen, setFullScreen] = useState(false);
  const videoRef = useRef(null);
  const videoScreenRef = useRef(null);
  const playPauseVideo = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      videoRef.current.play();
      setDuration(videoRef.current.duration);
    } else {
      videoRef.current.pause();
    }
  };

  const handleSpeedRate = () => {
    if (speedRate === 1) {
      videoRef.current.playbackRate = 1.5;
      setSpeedRate(1.5);
    } else if (speedRate === 1.5) {
      videoRef.current.playbackRate = 2;
      setSpeedRate(2);
    } else {
      videoRef.current.playbackRate = 1;
      setSpeedRate(1);
    }
  };

  const handleFullScreenVideo = () => {
    setFullScreen(!fullScreen);
    if (!fullScreen) {
      videoScreenRef.current.requestFullscreen();
    }
    else{
      videoScreenRef.current.exitFullscreen();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(videoRef.current.currentTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative z-10" ref={videoScreenRef}>
      <video
        className="h-screen object-cover"
        ref={videoRef}
        onClick={playPauseVideo}
      >
        <source src={src} />
      </video>
      <div className="absolute flex top-8 right-8 space-x-2">
        <div className="text-semibold rounded-xl py-1 px-2 text-white">
          <span>
            {Math.floor(currentTime / 60) +
              ":" +
              ("0" + Math.floor(currentTime % 60)).slice(-2)}
            /{" "}
            {Math.floor(duration / 60) +
              ":" +
              ("0" + Math.floor(duration % 60)).slice(-2)}
          </span>
        </div>
        <div className="border-2 border-white text-semibold rounded-xl py-1 px-2 text-white bg-light-white hover:scale-105 transition transform ease-out duration-200">
          CC
        </div>
        <div
          className="border-2 border-white text-semibold rounded-xl py-1 px-2 text-white bg-light-white hover:scale-105 transition transform ease-out duration-200"
          onClick={handleSpeedRate}
        >
          {speedRate}x
        </div>
        <img
          onClick={handleFullScreenVideo}
          src={ZoomImage}
          alt="zoom"
          className="hover:scale-105 transition transform ease-out duration-200"
        />
      </div>
      <div
        className={`absolute top-[45%] left-[40%] ${isPlaying ? "hidden" : ""}`}
      >
        <img
          src={playImage}
          alt="play"
          className="opacity-80 hover:scale-105 transition transform ease-out duration-200"
          onClick={playPauseVideo}
        />
      </div>
      <div className="absolute bottom-10 left-8 flex flex-col space-y-2 bg-btn-index px-2 py-2 rounded-xl opacity-80 text-white hover:opacity-95 hover:scale-105 transition transform ease duration-300">
        <span>Powered by:</span>
        <span>
          <img src={Logo} alt="Logo" />
        </span>
      </div>
    </div>
  );
}

export default VideoPlayer;
