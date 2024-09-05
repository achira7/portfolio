import React from "react";

//Components
import Card from "../components/Card";

const Projects = () => {
  return (
    <div className="light-mode bg-background)">
      <div className="h-screen flex flex-col flex-wrap top-0 left-0 z-10">
        <div>
          <h1
            id="achira"
            className="text-7xl font-bold text-copy-primary font-ibm top-0 mx-5 mt-5 flex flex-wrap"
          >
            Projects
          </h1>
        </div>

        <Card />
      </div>
    </div>
  );
};

export default Projects;
