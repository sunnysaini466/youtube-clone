import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Comedy",
    "Songs",
    "Movies",
    "News",
    "Funny",
    "Cricket",
    "Football",
    "Gaming",
    "Live",
    "Trailer",
    "Javascript",
    "React",
    "Football",
    "Gaming",
    "Live",
    "Trailer",
    "Javascript",
    "Movies",
    "News"
  ];
  return (
    <div className="flex">
      {list.map((value) => (
        <Button name={value} />
      ))}
    </div>
  );
};

export default ButtonList;
