import React from "react";
import "./VideoFooter.css";
import { BsMusicNote } from "react-icons/bs";
import Ticker from "react-ticker";

function VideoFooter(props) {
  const { channel, description, song } = props;
  return (
    <div className="video__footer">
      <div className="videoFooter__text">
        <h3>{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <BsMusicNote fontSize="large" className="videoFooter__icon" />
          <Ticker>{({ index }) => <p>{song}</p>}</Ticker>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-music-player-button-png-image_11571398.png"
        alt=""
      />
    </div>
  );
}

export default React.memo(VideoFooter);
