import React from "react";
import './style.css'

export const MyVideo = () => {
  return (
    <div className="my-video">
      <video
        src='videos/video1.mp4'
        width="600"
        height="400"
        controls
      />
      Тут скоро будет видео
    </div>
  );
};
