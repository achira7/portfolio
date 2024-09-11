import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import DarkMode from "./DarkMode/DarkMode";

import ChatBot from "../components/ChatBot";
import { ChatIcon, UpArrow, CloseIcon } from "../assets/icons/icons";

const NavBar = () => {
  const navigate = useNavigate();

  const [isChatOpen, setIsChatOpen] = useState(false);

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

      <div className="flex">
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full"
      >
        <ChatIcon />
      </button>
      <button className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full mx-8">
        <UpArrow />
      </button>
      </div>

      {/* ChatBot Overlay */}
      {isChatOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-sky-950 bg-opacity-50 z-30">
          <div className="relative w-96 h-auto p-4 bg-white rounded-lg">
            <button
              onClick={() => setIsChatOpen(false)}
              className="absolute top-2 right-2 text-red-500"
            >
              <CloseIcon className="w-7 h-7 text-color-red z-20" />
            </button>
            <ChatBot />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
