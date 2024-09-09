import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { languages as logos } from "../logos";
import Button from "../components/Button";
import DownloadCV from "../components/DownloadCV";
import Chat from "../components/Chat";
//import Chatbot from "react-chatbot-kit";
import ChatBot from "../components/ChatBot";

import DarkMode from "../components/DarkMode/DarkMode.jsx";

import {CloseIcon, ChatIcon, AiChat, UpArrow} from "../assets/icons/icons";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/achira7/repos"
        );
        const data = await response.json();

        const reposWithLanguages = await Promise.all(
          data.map(async (repo) => {
            const languagesResponse = await fetch(repo.languages_url);
            const languagesData = await languagesResponse.json();
            return { ...repo, languages: Object.keys(languagesData) };
          })
        );
        setRepos(reposWithLanguages);
        console.log(repos);
      } catch (error) {
        console.error("Error fetching data from GitHub:", error);
      }
    };

    fetchRepos();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredRepos = repos.filter(
    (repo) =>
      repo.name.toLowerCase().includes(searchQuery) ||
      (repo.description &&
        repo.description.toLowerCase().includes(searchQuery)) ||
      repo.languages.join(", ").toLowerCase().includes(searchQuery)
  );

  return (
    <div className="bg-background">
      <DownloadCV />

      <DarkMode />

      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full"
      >
        <ChatIcon/>
      </button>

      <button
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full mx-8"
      >
        <UpArrow />
      </button>
      
      <div>
        <h1
          id="achira"
          className="text-7xl font-bold text-copy-primary font-ibm top-0 mx-5 mt-5 flex flex-wrap"
        >
          Projects
        </h1>
      </div>

      <div className="flex text-3xl p-5 align-middle items-center">
        <svg
          className="text-copy-primary mr-3"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>

        <input
          className="bg-gray-50 outline-none ml-1 block font-space bg-inherit"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="h-screen flex flex-col flex-wrap top-0 left-0 ">
        <div className="flex w-1/2 flex-col">
          {filteredRepos
            .filter((repo) => repo.stargazers_count !== 0)
            .map((repo) => (
              <Card
                type={"project"}
                key={repo.id}
                projectName={repo.name}
                description={repo.description || "No description provided."}
                gitLink={repo.html_url}
                demoLink={repo.homepage}
                languages={repo.languages}
                libraries={repo.topics}
              />
            ))}
        </div>
      </div>

            {/* ChatBot Overlay */}
            {isChatOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-sky-950 bg-opacity-50 z-30">
          <div className="relative w-96 h-auto p-4 bg-white rounded-lg">
            <button
              onClick={() => setIsChatOpen(false)}
              className="absolute top-2 right-2 text-red-500"
            >
              <CloseIcon/>
            </button>
            <ChatBot />
          </div>
        </div>
      )}

    </div>
  );
};

export default Projects;
