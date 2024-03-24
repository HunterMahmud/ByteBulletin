import React, { useEffect, useState } from "react";
import { getDataFromLocalStorage } from './../Utils/LocalStorageWork';
import Blog from './../Components/Blog';

const Bookmarks = () => {
const [blogsData, setBlogsData] = useState([]);
useEffect(()=>{
    const data = getDataFromLocalStorage();
    setBlogsData(data);
},[])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 mx-auto">
      {
        blogsData.map((item)=> <Blog key={item.id} blog={item} />)
      }
    </div>
  );
};

export default Bookmarks;
