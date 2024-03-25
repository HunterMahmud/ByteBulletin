import React, { useEffect, useState } from "react";
import { getDataFromLocalStorage, deleteBlogFromLocalStorage } from "./../Utils/LocalStorageWork";
import Blog from "./../Components/Blog";
import NoBookmark from './../Components/NoBookmark';

const Bookmarks = () => {
  const [blogsData, setBlogsData] = useState([]);
  useEffect(() => {
    const data = getDataFromLocalStorage();
    setBlogsData(data);
  }, []);
  const handleDeleteBookmark = (id) => {
    deleteBlogFromLocalStorage(id);
    const data = getDataFromLocalStorage();
    setBlogsData(data);
  };
  if(blogsData.length<1) return <NoBookmark />
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 mx-auto">
      {blogsData.map((item) => (
        <Blog
          deletable={true}
          key={item.id}
          blog={item}
          handleDeleteBookmark={handleDeleteBookmark}
        />
      ))}
    </div>
  );
};

export default Bookmarks;
