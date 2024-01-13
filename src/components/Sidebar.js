import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {

const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

if(!isMenuOpen) return null;

  return (
    <div className="w-48 shadow-lg p-2">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>More</li>
      </ul>
      <h1 className="pt-5 text-xl">You</h1>
      <ul>
        <li>Your Channel</li>
        <li>Watch Late</li>
        <li>History</li>

        <li>Your Videos</li>
        <li>Liked Videos</li>
      </ul>
      <h1 className="pt-5 text-xl text-bold">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};

export default Sidebar;
