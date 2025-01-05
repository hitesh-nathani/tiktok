import React, { useRef, useCallback, useEffect } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import { MdPauseCircle, MdPlayCircle } from "react-icons/md";
import useScrollSnap from "react-use-scroll-snap";

function Video({
  url,
  id,
  channel,
  description,
  song,
  likes,
  shares,
  messages,
  handleVideoLike,
}) {
  const [playing, setPlaying] = React.useState(false);
  const videoRef = useRef(null);

  // UseCallback for stable function reference
  const handleVideoPress = useCallback(() => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setPlaying(!videoRef.current.paused);
  }, [videoRef]);

  useEffect(() => {
    const handleVideoPlaying = () => {
      setPlaying(!videoRef.current.paused);
    };
    videoRef.current.addEventListener("play", handleVideoPlaying);
    videoRef.current.addEventListener("pause", handleVideoPlaying);

    return () => {
      videoRef.current.removeEventListener("play", handleVideoPlaying);
      videoRef.current.removeEventListener("pause", handleVideoPlaying);
    };
  }, [videoRef]);

  // Initialize scroll snap
  useScrollSnap({ ref: videoRef });

  return (
    <div className="video">
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {playing ? (
          <MdPauseCircle
            size={50}
            onClick={handleVideoPress}
            className="video__icon"
          />
        ) : (
          <MdPlayCircle
            size={50}
            onClick={handleVideoPress}
            className="video__icon"
          />
        )}
      </div>
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
      <VideoSidebar
        updateLike={handleVideoLike}
        likes={likes}
        shares={shares}
        messages={messages}
      />
    </div>
  );
}

// Memoize the child components
export default React.memo(Video);
