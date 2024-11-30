import React, { useRef, useCallback } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, description, song, likes, shares, messages }) {
  const [playing, setPlaying] = React.useState(false);
  const videoRef = useRef(null);

  // UseCallback for stable function reference
  const handleVideoPress = useCallback(() => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  }, [playing]);

  return (
    <div className="video">
      <video
        onClick={() => {
          handleVideoPress();
        }}
        className="video__player"
        src={url}
        ref={videoRef}
      ></video>

      {/* Video footer */}
      <VideoFooter channel={channel} description={description} song={song} />

      {/* Video sidebar */}
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

// Memoize the child components
export default React.memo(Video);
