import React from "react";
import Footer from "./Footer";
import reactlogo from "../assets/abstract-user-flat-4.png";
import youtube from "../assets/yt-logo.png";
import youtubemobile from "../assets/yt-logo-mobile.png";
import ham from "../assets/Hamburger_icon.svg.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Head = () => {
  const dispatch = useDispatch();
  const togglemenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" flex sticky items-center justify-between top-0 z-10 pt-10  pb-10 shadow-lg h-16 bg-black">
      <div className="flex">
        <img
          className="h-12 p-2 bg-white cursor-pointer hidden md:block "
          alt="hamburger"
          src={ham}
          onClick={() => togglemenuHandler()}
        />
        <img
          className="h-12 p-2 cursor-pointer hidden md:block "
          src={youtube}
          alt="logo"
        />
        <img
          className="h-12 p-2 cursur-pointer hidden max-md:block"
          src={youtubemobile}
          alt="logo"
        />
      </div>
      <div className="flex w-1/2">
        <input
          type="text"
          className="w-full p-3 rounded-l-full bg-slate-400 font-medium border-gray-400 text-2xl px-10"
          placeholder="Search"
        />
        <button className="rounded-r-full border-gray-400 p-2 bg-slate-500 font-medium text-xl">
          Search
        </button>
      </div>
      <div>
        <img
          className="h-8  hidden dark:md:block "
          src={reactlogo}
          alt="user"
        />
      </div>
    </div>
  );
};
export default Head;
