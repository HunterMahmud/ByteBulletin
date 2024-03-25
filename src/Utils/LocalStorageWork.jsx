import toast from "react-hot-toast";

// get data from localStorage function
export const getDataFromLocalStorage = () => {
  let localData = localStorage.getItem("blogs");
  if (localData) {
    return JSON.parse(localData);
  }
  return [];
};

// saved to localStorage

export const saveToLocalStorage = (blog) => {
  let blogs = getDataFromLocalStorage();
  const isExists = blogs.find((b) => b.id == blog.id);
  if (isExists) {
    return toast.error("Already Bookmarket!!!");
  } else {
    blogs.push(blog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    toast.success("Blog Bookmarket Successfully!");
  }
};

//delete bookmarks

export const deleteBlogFromLocalStorage = (id) => {
  let blogs = getDataFromLocalStorage();
  const isExists = blogs.find((b) => b.id == id);
  if (isExists) {
    const newBlogs = blogs.filter((b) => b.id != id);
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
    toast.success("Blog removed from bookmark!");
  }
  else{
    toast.error("Bookmark isn't exists!")
  }
};
