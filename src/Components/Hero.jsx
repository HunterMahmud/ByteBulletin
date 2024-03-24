import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero relative z-10">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-5xl font-bold">Welcome to <span className="font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 bg-300% text-transparent bg-clip-text animate-gradient">ByteBulletin</span> </h1>
          <p className="py-6">
          ByteBulletin: Uncover the latest in technology trends, insightful articles, and innovative advancements. Stay informed!
          </p>
          <div className="flex gap-5 items-center justify-center">
          <Link to='/blogs' className="btn btn-primary">Read More</Link>
          <Link to='./bookmarks' className="btn btn-primary">Bookmarks</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
