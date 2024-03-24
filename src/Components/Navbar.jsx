import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      localStorage.setItem("theme", theme);
    }
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const themeController = (e) => {
    if (e.target.checked) {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <div className="navbar bg-gray-200 shadow-lg px-7 fixed z-10 ">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost gap-0 text-2xl text-primary font-bold"
        >
          Byte<span className="text-pink-500">Bulletin</span>
        </Link>
      </div>
      <div className="flex-none">
        <div className="menu menu-horizontal font-bold px-1 flex items-center justify-center gap-4">
          <NavLink className={({isActive})=> isActive ? 'text-primary': ''} to="/">Home</NavLink>

          <NavLink className={({isActive})=> isActive ? 'text-primary': ''} to="/blogs">Blogs</NavLink>

          <NavLink className={({isActive})=> isActive ? 'text-primary': ''} to="/bookmarks">Bookmarks</NavLink>

          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              onChange={themeController}
              type="checkbox"
              value=""
              className="toggle theme-controller"
              checked={localStorage.getItem("theme") === "dark"}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
