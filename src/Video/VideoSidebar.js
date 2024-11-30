import React from "react";
import "./VideoSidebar.css";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { IoMdShare } from "react-icons/io";

function VideoSidebar(props) {
  const { likes, shares, messages } = props;
  const [liked, setLiked] = React.useState(false);
  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <MdOutlineFavorite
            size={30}
            color="red"
            onClick={(e) => setLiked(false)}
          />
        ) : (
          <MdOutlineFavoriteBorder size={30} onClick={(e) => setLiked(true)} />
        )}
        <p>{likes}</p>
      </div>
      <div className="videoSidebar__button">
        <RiMessage3Fill size={30} />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <IoMdShare size={30} />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default React.memo(VideoSidebar);
