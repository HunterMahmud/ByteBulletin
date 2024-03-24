import React from "react";
import { Link } from "react-router-dom";
import notImg from '../assets/404.jpg'

const Blog = ({ blog }) => {
  //console.log(blog);
  const { id, cover_image, title, description, created_at } = blog;
  return (
    <>
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
    </>
  );
};

export default Blog;
