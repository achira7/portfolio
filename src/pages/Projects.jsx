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

  const git = process.env.REACT_APP_GITHUB_API_KEY

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/achira7/repos",{
            // headers: {
            // Authorization: `Bearer ${git}`
            //  }
          }
        );
        const data = await response.json();

        const reposWithLanguages = await Promise.all(
          data.map(async (repo) => {
            const languagesResponse = await fetch(repo.languages_url);
            const languagesData = await languagesResponse.json();
            const imageUrl = `https://raw.githubusercontent.com/achira7/${repo.name}/main/image.jpg`;
            return {
              ...repo,
              languages: Object.keys(languagesData),
              imageUrl,
            };
          })
        );
        setRepos(reposWithLanguages);
        console.log(repos)
      } catch (error) {
        console.error("Error fetching data from GitHub:", error);
      }
    };

    fetchRepos();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleTechnologyClick = (tech) => {
    setSearchQuery(tech.toLowerCase()); 
  };

  const filteredRepos = repos.filter((repo) => {
    const query = searchQuery.toLowerCase();
  
    const nameMatch = repo.name.toLowerCase().includes(query);
    const descriptionMatch = repo.description?.toLowerCase().includes(query);
  
    const languagesMatch = repo.languages.some((lang) =>
      lang.toLowerCase().includes(query)
    );
  
    const librariesMatch = repo.topics?.some((topic) =>
      topic.toLowerCase().includes(query)
    );
  
    return nameMatch || descriptionMatch || languagesMatch || librariesMatch;
  });

  return (
    <div className="bg-background">
      <div>
        <h1
          id="achira"
          className="text-5xl font-bold text-color-primary font-inter top-0 mx-5 mt-5 flex flex-wrap"
        >
          Projects
        </h1>
      </div>
      <div className="flex text-3xl pt-7 px-5 align-middle items-center mb-7">
        <SearchIcon className="w-10 h-10 text-color-primary" />
        <input
          className="outline-none ml-3 block font-inter bg-inherit text-color-secondary"
          type="search"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="flex flex-wrap justify-center">
  {filteredRepos
    .filter((repo) => repo.stargazers_count !== 0)
    .map((repo) => (
      <div key={repo.id} className="w-[850px] "> 
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
          onTechClick={handleTechnologyClick} 
        />
      </div>
    ))}
</div>

    </div>
  );
};

export default Projects;
