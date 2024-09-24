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
  const git = process.env.REACT_APP_GITHUB_API_KEY

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
    <div className="bg-background mt-20 md:mt-24">
      <div className="w-full  my-5 ml-5 mt-5 z-10">
        <h1 className="text-5xl font-bold font-inter text-color-primary mb-2">
          Technologies
        </h1>
        <h2 className="font-inter text-sm text-color-secondary md:text-2xl">
          Click to see Projects
        </h2>
        <Marquee />
      </div>
      <div>
        <h1
          id="achira"
          className="text-3xl font-bold text-color-primary font-inter top-0 mx-5 mt-5 flex flex-wrap md:text-5xl"
        >
          Projects
        </h1>
      </div>

      <div className="flex pt-3 px-5 align-middle items-center mb-7 md:pt-7">
        <SearchIcon className="w-7 h-7 text-color-primary md:w-10 md:h-10 " />
        <input
          className="text-xl outline-none ml-3 block font-inter bg-inherit text-color-secondary md:text-3xl"
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
                libraries={repo.topics?.filter(topic => topic !== "best-projects") || []}
                //libraries={repo.topics}
                imgLink={repo.imageUrl}
              />
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
