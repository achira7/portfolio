import React, { useState } from "react";
import Button from "./Button";
import { languages as langLogos } from "../logos";
import { libraries as libLogos } from "../logos";

const Card = ({
  type,
  projectName,
  description,
  gitLink,
  demoLink,
  languages,
  libraries,
  imgLink,
  onTechClick,
  icon,
}) => {
  const [isImageOpen, setIsImageOpen] = useState(false); 
  const [isExpanded, setIsExpanded] = useState(false);

  const BUTTON_THRESHOLD = 20; // See More threshold

  const Buttons = () => (
    <div>
      <Button
        link={gitLink}
        name={"Git Repo"}
        color={"blue"}
        icon={"git"}
        iconClass="hidden sm:inline"
      />
      <Button
        icon={"play"}
        link={demoLink}
        name={"Live Demo"}
        color={"blue"}
        className="ml-3"
        iconClass="hidden sm:inline"
      />
    </div>
  );

  const getTruncatedDescription = () => {
    const words = description.split(' ');
    return words.length > BUTTON_THRESHOLD ? words.slice(0, BUTTON_THRESHOLD).join(' ') + '...' : description;
  };

  const isDescriptionLongEnough = description.split(' ').length > BUTTON_THRESHOLD;

  return (
    <>
      {type === "project" ? (
        <div>
          <div className="p-8 md:mb-10 mb-5 z-10 mx-5 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-xl">
            <div className="pb-3 text-2xl font-inter font-bold text-color-primary capitalize md:text-3xl">
              {projectName}
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-7/12 font-inter text-base md:text-lg text-color-secondary text-justify mt-1 flex flex-col justify-between">
                <div>
                  <p className="block md:hidden">
                    {isExpanded ? description : getTruncatedDescription()}
                    {isDescriptionLongEnough && !isExpanded && (
                      <span
                        className="text-color-primary underline px-3 py-1"
                        id="clickable"
                        onClick={() => setIsExpanded(true)}
                      >
                        Read More
                      </span>
                    )}
                    {isDescriptionLongEnough && isExpanded && (
                      <span
                        className="text-color-primary underline px-3"
                        id="clickable"
                        onClick={() => setIsExpanded(false)}
                      >
                        Read Less
                      </span>
                    )}
                  </p>
                  <p className="hidden md:block">
                    {description}
                  </p>
                </div>
                <div className="hidden md:block mt-4">
                  <Buttons />
                </div>
              </div>
              <div className="md:w-5/12 flex flex-col justify-center items-center">
                <img
                  id="clickable"
                  src={imgLink}
                  alt={`${projectName} Preview`}
                  className="object-cover rounded-xl border border-card-primary-border hidden md:flex"
                  onClick={() => setIsImageOpen(true)}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                  style={{ cursor: "pointer" }}
                />
                <div className="flex flex-col sm:flex-row md:gap-10 items-start mt-4">
                  {Array.isArray(languages) && languages.length > 0 && (
                    <div
                      className="flex flex-row sm:flex-row md:flex-col gap-4 mr-4 mb-4"
                      id="clickable"
                    >
                      {languages.map((lang) => (
                        <div
                          key={lang}
                          className="flex md:gap-4"
                          onClick={() => onTechClick(lang)}
                          id="clickable"
                        >
                          <div className="md:w-7 md:h-7 h-10 w-10 bg-white rounded-md flex items-center justify-center flex-wrap">
                            <img
                              src={langLogos[lang]}
                              alt={lang}
                              className="md:w-5 md:h-5 w-7 h-7"
                              id="clickable"
                            />
                          </div>
                          <div>
                            <span className="capitalize text-color-primary text-base hidden font-semibold md:flex">
                              {lang}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {Array.isArray(libraries) && libraries.length > 0 && (
                    <div
                      className="flex flex-row sm:flex-row md:flex-col gap-4 mb-4"
                      id="clickable"
                    >
                      {libraries.map((lib) => (
                        <div
                          key={lib}
                          onClick={() => onTechClick(lib)}
                          className="flex gap-4"
                          id="clickable"
                        >
                          <div className="md:w-7 md:h-7 h-10 w-10 bg-white rounded-md flex items-center justify-center">
                            <img
                              src={libLogos[lib]}
                              alt={lib}
                              className="md:w-5 md:h-5 w-7 h-7"
                              id="clickable"
                              onError={(e) => {
                                e.target.style.display = "none";
                              }}
                            />
                          </div>
                          <span className="capitalize text-color-primary text-base hidden font-semibold md:flex">
                            {lib}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="block md:hidden mt-4">
                  <Buttons />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="m-5 bg-card-primary border border-card-primary-border z-10 rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top">
          <div className="px-6 py-6">
            <img src={icon} alt="" />
            <h1 className="text-3xl font-inter font-bold text-color-primary capitalize"></h1>
            <p className="font-inter text-base text-color-secondary mt-1"></p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
