import React, { useRef } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";

function Video() {
  const [playing, setPlaying] = React.useState(false);
  const videoRef = useRef(null);

  //  video playing, pause it function
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        src="https://cdn.pixabay.com/video/2024/08/30/228847_large.mp4"
        ref={videoRef}
        loop
      ></video>

      {/* Video footer */}
      
      <VideoFooter />

      {/* Video sidebar */}
      <div className="video__sidebar">
        <div className="sidebar__button">❤️ 123</div>
        <div className="sidebar__button">💬 45</div>
        <div className="sidebar__button">🔗 Share</div>
      </div>
    </div>
  );
}

export default Video;
