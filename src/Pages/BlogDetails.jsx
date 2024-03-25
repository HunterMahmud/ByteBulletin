import { Link, Outlet, useLoaderData } from "react-router-dom";
import notImg from "../assets/404.jpg";
import { useState } from "react";
import { MdBookmarkAdd } from "react-icons/md";
import {saveToLocalStorage} from '../Utils/LocalStorageWork'

const BlogDetails = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const blogDetails = useLoaderData();
  const {
    title,
    comments_count,
    cover_image,
    public_reactions_count,
    tags,
    published_at,
    reading_time_minutes,
  } = blogDetails;

  const handleBookmark = (blog) => {
    saveToLocalStorage(blog);
  }
  return (
    <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg w-full max-w-3xl shadow-md mx-auto">
      <article className="space-y-8">
        <div className="space-y-6">
        <img src={cover_image} alt="" />
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            {title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center">
            <div className="flex items-center md:space-x-2">
              <p className="text-sm">
              {reading_time_minutes} min read • {new Date(published_at).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour24: false,
            })}
              </p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
         {comments_count} Comments • {public_reactions_count} views
            </p>
          </div>
          <div className="flex flex-wrap py-6 gap-2 border-t border-dashed ">
          {tags.map((tag,i) => (
            <a
            key={i}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline"
            >
              #{tag}
            </a>
          ))}
        </div>
          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
            <Link
              onClick={() => setCurrentTab(0)}
              to=""
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                currentTab === 0 ? "border border-b-0 rounded-t-lg" : "border-b"
              } `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Content</span>
            </Link>
            <Link
              onClick={() => setCurrentTab(1)}
              to={`author`}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                currentTab === 1 ? "border border-b-0 rounded-t-lg" : "border-b"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Author</span>
            </Link>
            <div className="ml-4 bg-pink-500 p-3 rounded-full cursor-pointer" onClick={()=>handleBookmark(blogDetails)}>
            <MdBookmarkAdd />
            </div>
          </div>
        </div>
      </article>
      <div>
       
        <div className="flex flex-col items-center justify-center">
          <Outlet />
        </div>
        
      </div>
    </div>
  );
};

export default BlogDetails;
