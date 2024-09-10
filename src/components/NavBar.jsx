import React from "react";
import { useNavigate } from "react-router-dom";
import DarkMode from "./DarkMode/DarkMode";

const NavBar = () => {
  const navigate = useNavigate();

  const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Development", url: "/projects" },
    { id: 3, title: "Graphic Design", url: "/graphic" },
    { id: 4, title: "Music", url: "/music" },
    { id: 5, title: "Contact", url: "/test" },
  ];

  return (
    <div className="fixed top-0 right-0 z-10 flex flex-wrap bg-trans">
      <DarkMode className="mb-5" />
      <div className="flex justify-end bg-transparent">
        <ul className="flex flex-col items-end bg-transparent">
          {links.map(({ id, title, url }) => (
            <li
              key={id}
              onClick={() => navigate(url)}
              className="text-color-primary text-4xl font-inter font-bold mx-5 my-2 py-3 px-4 z-10"
              style={{
                backgroundColor: "transparent",
                position: "relative",
                zIndex: 1,
              }}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
