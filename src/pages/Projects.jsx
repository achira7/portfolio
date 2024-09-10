import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import DownloadCV from "../components/DownloadCV";
import ChatBot from "../components/ChatBot";

import {
  CloseIcon,
  ChatIcon,
  UpArrow,
  SearchIcon,
} from "../assets/icons/icons";

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

            const imageUrl = `https://raw.githubusercontent.com/achira7/${repo.name}/main/image.jpg`
            
            return {
              ...repo,
              languages: Object.keys(languagesData),
              imageUrl, 
            };
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
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full"
      >
        <ChatIcon />
      </button>

      <button className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full mx-8">
        <UpArrow />
      </button>

      <div>
        <h1
          id="achira"
          className="text-5xl font-bold text-color-primary font-inter top-0 mx-5 mt-5 flex flex-wrap"
        >
          Projects
        </h1>
      </div>

      <div className="flex text-3xl p-5 align-middle items-center">
        <SearchIcon className="w-10 h-10 text-color-primary" />

        <input
          className="outline-none ml-3 block font-space bg-inherit text-color-secondary"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="h-screen flex flex-col flex-wrap top-0 left-0 ">
        {filteredRepos
          .filter((repo) => repo.stargazers_count !== 0)
          .map((repo) => (
            <div key={repo.id} className="w-full md:w-1/4 lg:w-1/2 p-2">
              <Card
                type={"project"}
                key={repo.id}
                projectName={repo.name}
                description={repo.description || "No description provided."}
                gitLink={repo.html_url}
                demoLink={repo.homepage}
                languages={repo.languages}
                libraries={repo.topics}
                imgLink={repo.imageUrl} 
              />
            </div>
          ))}
      </div>

      <DownloadCV />

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

export default Projects;
