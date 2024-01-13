import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const res = await data.json();
    console.log(res.items);
    setVideos(res.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((videos) => (
        <Link to={"/watch?v=" + videos.id}>
          {" "}
          <VideoCard info={videos} key={videos.id} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
