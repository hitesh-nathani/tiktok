import { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video/Video";
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);
  console.log("🚀 ~ App ~ videos:", videos);
  async function getData() {
    const response = await axios.get("v2/posts");
    setVideos(response.data);
  }

  //   {
  //     "_id": "674b1abc4d6884c487ee6170",
  //     "channel": "titok",
  //     "song": "Dil Diyan Gallan",
  //     "likes": 0,
  //     "messages": 0,
  //     "description": "This is a description",
  //     "shares": 0,
  //     "url": "https://cdn.pixabay.com/video/2024/08/30/228847_large.mp4",
  //     "__v": 0
  // }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="app">
      <h1>Lets build a Full Stack MERN Tik tok clone</h1>
      <div className="app__videos">
        {videos?.length > 0 &&
          videos.map((video) => (
            <Video
              key={video._id}
              url={video.url}
              channel={video.channel}
              description={video.description}
              song={video.song}
              likes={video.likes}
              shares={video.shares}
              messages={video.messages}
            />
          ))}
        {/* <Video
          url="https://cdn.pixabay.com/video/2024/08/30/228847_large.mp4"
          channel="Clever Programmer"
          description="This is a description"
          song="song"
          likes={100}
          shares={200}
          messages={300}
        /> */}
        {/* <Video url="https://cdn.pixabay.com/video/2024/08/30/228847_large.mp4" channel="Clever Programmer" description="This is a description" song="song" likes={100} shares={200} messages={300} /> */}
      </div>
      {/* app container */}

      {/* videos */}
    </div>
  );
}

export default App;

// username: hiteshnathani7777
// password: hiteshTiktok

// mongodb+srv://hiteshnathani7777:hiteshTiktok@cluster0.ioa4r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
