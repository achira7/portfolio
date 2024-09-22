import React from "react";
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
  return (
    <>
      {type === "project" ? (
        <div className="mb-10 mx-5 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-xl z-20">
          <div className="w-full flex flex-row px-6 py-6">
            {/* Text and Button Section */}
            <div className="w-2/3 flex flex-col h-full pr-5">
            <div>
              <h5 className="text-xl font-inter font-bold text-color-primary capitalize md:text-3xl">
                {projectName}
              </h5>
              <p className="font-inter text-sm text-color-secondary text-justify mt-1 md:text-base">
                {description}
              </p>
            </div>
              

              {/* Buttons */}
              <div className="flex mt-4 flex-nowrap">
                <Button
                  link={gitLink}
                  name={"Git Repo"}
                  color={`stone-500`}
                  icon={"git"}
                  id="clickable"
                  iconClass="hidden sm:inline"
                />
                <Button
                  icon={"play"}
                  link={demoLink}
                  name={"Live Demo"}
                  color={`card-secondary`}
                  className="ml-3"
                  id="clickable"
                  iconClass="hidden sm:inline"
                />
              </div>
            </div>
            {imgLink && (
              <div className="w-2/5 md:pr-5">
                <img
                  src={imgLink}
                  alt={`${projectName} Preview`}
                  className="w-full object-cover rounded-xl border border-card-primary-border hidden md:flex"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="grid grid-cols-2 mt-5 md:gap-4">
                  {Array.isArray(languages) && languages.length > 0 && (
                    <div className="space-y-2">
                      {languages.map((lang) => (
                        <div
                          key={lang}
                          className="items-center grid grid-cols-3"
                          onClick={() => onTechClick(lang)}
                          id="clickable"
                        >
                          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center ">
                            <img
                              src={langLogos[lang]}
                              alt={lang}
                              className="w-6 h-6"
                              id="clickable"
                            />
                          </div>

                          <div>
                            <span className="capitalize text-color-primary text-base hidden font-semibold ml-2 md:flex">
                              {lang}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {Array.isArray(libraries) && libraries.length > 0 && (
                    <div className="space-y-2">
                      {libraries.map((lib) => (
                        <div
                          key={lib}
                          className="items-center grid grid-cols-3"
                          onClick={() => onTechClick(lib)}
                          id="clickable"
                        >
                          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                            <img
                              src={libLogos[lib]}
                              alt={lib}
                              className="w-6 h-6"
                              id="clickable"
                              onError={(e) => {
                                e.target.style.display = "none";
                              }}
                            />
                          </div>
                          <span className="capitalize text-color-primary text-base hidden font-semibold ml-2 md:flex">
                            {lib}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            
          </div>
        </div>
      ) : (
        <div className="m-5 bg-card-primary border border-card-primary-border z-10 rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top">
          <div className="px-6 py-6">
            <img src={icon} alt="" />
            <h1 className="text-3xl font-inter font-bold text-color-primary capitalize">
              {name}
            </h1>
            <p className="font-inter text-base text-color-secondary mt-1">
              {description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
