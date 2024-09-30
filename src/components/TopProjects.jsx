import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const TopProjects = () => {
  const [repos, setRepos] = useState([]);
  const git = process.env.REACT_APP_GITHUB_API_KEY;

  useEffect(() => {
    const fetchTopProjects = async () => {
      try {
        // Fetch repos with the 'best-projects' topic
        const response = await fetch(
          "https://api.github.com/search/repositories?q=user:achira7+topic:best-projects",
          {
            // headers: {
            //   Authorization: `Bearer ${git}`,
            // },
          }
        );
        const data = await response.json();

        // Process each repository to fetch additional details (languages, image)
        const reposWithLanguages = await Promise.all(
          data.items.map(async (repo) => {
            const languagesResponse = await fetch(repo.languages_url, {
              //   headers: {
              //     Authorization: `Bearer ${git}`,
              //   },
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
        console.error("Error fetching 'Best Projects' from GitHub:", error);
      }
    };

    fetchTopProjects();
  }, [git]);

  return (
    <div className="bg-background w-full">

      <div className="flex flex-wrap justify-center mt-10 gap-2">
        {repos.length > 0 ? (
          repos.map((repo) => (
            <div key={repo.id} className="w-[850px]">
              <Card
                type={"project"}
                key={repo.id}
                projectName={repo.name}
                description={repo.description || "No description provided."}
                gitLink={repo.html_url}
                demoLink={repo.homepage}
                languages={repo.languages}
                libraries={
                  repo.topics?.filter((topic) => topic !== "best-projects") || []
                }
                imgLink={repo.imageUrl}
              />
            </div>
          ))
        ) : (
          <p className="text-2xl text-center text-color-secondary">
            No top projects found
          </p>
        )}
      </div>
    </div>
  );
};

export default TopProjects;
