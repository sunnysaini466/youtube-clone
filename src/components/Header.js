import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Header = () => {

  const dispatch = useDispatch();

  const  toggleMenuHandler = () => {
      dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
        onClick={toggleMenuHandler()}
          className="h-6 cursor-pointer"
          alt="menu-icon"
          src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-512.png"
        />
        <a href="/">
        <img
          className="h-6 ml-6"
          alt="menu-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
        />
        </a>
      </div>
      <div className="col-span-10">
        <input
          type="text"
          className="w-1/2 border border-gray-200 rounded-l-full p-2"
        />
        <button className="border border-gray-200 p-2 rounded-r-full bg-gray-200">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="menu-icon"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        />
      </div>
    </div>
  );
};

export default Header;
