import React from "react";

const VideoCard = ({ info }) => {
  //console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  const { viewCount } = statistics;
  var result = title.slice(0, 70) + (title.length > 70 ? "..." : "");
  return (
    <div className="py-2 my-2 md:p-2 md:m-2 w-full md:w-[340px] md:max-w-[340px]">      
    <img className="rounded-lg" src={thumbnails.medium.url} alt="video" />
      <ul>
      <li className="overflow-hidden text-ellipsis line-clamp-2 font-bold text-md m-2">{title}</li>
      <li className="cursor-pointer truncate mx-2 font-normal text-gray-600 text-sm">{channelTitle}</li>
      <li className="truncate mx-2 font-light text-gray-60 text-sm">{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
