import React from "react";

const VideoCard = ({ info }) => {
  //console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  const { viewCount } = statistics;
  var result = title.slice(0, 70) + (title.length > 70 ? "..." : "");
  return (
    <div className="p-2 m-2 shadow-sm w-72 text-left hover:shadow-lg cursor-pointer">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="video" />
      <ul>
        <li className="text-lg py-2 font-medium">{result}</li>
        <li className="py-1">{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
