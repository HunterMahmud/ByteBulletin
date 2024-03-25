import React from "react";
import { Link } from "react-router-dom";
import notImg from '../assets/404.jpg'
import { BsBookmarkXFill } from "react-icons/bs";


const Blog = ({ blog, deletable, handleDeleteBookmark }) => {
  const { id, cover_image, title, description, created_at } = blog;
  
  return (
    <div className="flex relative">
      <Link
        rel="noopener noreferrer"
        to={`/blogs/${id}`}
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline light:bg-gray-900"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 light:bg-gray-500"
          src={cover_image || notImg}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">
            {new Date(created_at).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour24: false,
            })}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {
        deletable && <div 
        onClick={()=> {
          handleDeleteBookmark(id);
        }}
        className="absolute bg-red-600 rounded-full p-3 -right-3 -top-3 cursor-pointer"><BsBookmarkXFill /></div>
      }
    </div>
  );
};

export default Blog;
