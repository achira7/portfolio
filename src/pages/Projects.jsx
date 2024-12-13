import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";

import { SearchIcon } from "../assets/icons/icons";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";
import TopProjects from "../components/TopProjects";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();
  const git = process.env.GITHUB_API_KEY;

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query");
    if (query) {
      setSearchQuery(query);
    }
  }, [location.search]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/achira7/repos",
          {
            headers: {
              Authorization: `Bearer ${git}`,
            },
          }
        );
        const data = await response.json();

        const reposWithLanguages = await Promise.all(
          data.map(async (repo) => {
            const languagesResponse = await fetch(repo.languages_url, {
              headers: {
                Authorization: `Bearer ${git}`,
              },
            });
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
      } catch (error) {
        console.error("Error fetching data from GitHub:", error);
      }
    };

    fetchRepos();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
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
    <div className="bg-background mt-20 md:mt-32 items-center justify-center 0 ">
      <div className="flex flex-col m-5 md:m-8">
      <div className="w-full">
        <h1 className="text-3xl font-bold text-color-primary mb-2 font-inter flex flex-wrap md:text-3xl ">
          Technologies
        </h1>
        <h2 className="font-inter text-lg ml-1 mb-2 text-color-secondary md:text-xl">
          Click on the Tech icon to see all projects made with it
        </h2>
        <div className="flex items-center justify-center">
          <Marquee />
        </div>
      </div>

      <div className="my-5">
        <h1 className="text-3xl font-bold text-color-primary mb-2 font-inter flex flex-wrap md:text-3xl">
          Projects
        </h1>
        <h2 className="font-inter text-lg  mb-2 text-color-secondary md:text-xl">
          Best of my Personal / Professional / University projects
        </h2>
      </div>

      <div className="flex px-5 items-center justify-center mb-10">
        <SearchIcon className="text-color-primary md:w-10 md:h-10 " />
        <input
          id="clickable"
          className="clickable bg-card-primary-top px-8 text-xl outline-none ml-3 block font-inter border border-color-secondary rounded-full py-3 text-color-secondary md:text-3xl"
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
                libraries={
                  repo.topics?.filter((topic) => topic !== "best-projects") ||
                  []
                }
                imgLink={repo.imageUrl}
              />
            </div>
          ))}
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
