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
        <div className="mb-10 z-10 mx-5 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-xl">
          <div className="w-full flex pl-6 py-5">
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
                  iconClass="hidden sm:inline"
                />
                <Button
                  icon={"play"}
                  link={demoLink}
                  name={"Live Demo"}
                  color={`card-secondary`}
                  className="ml-3"
                  iconClass="hidden sm:inline"
                />
              </div>
            </div>
            {imgLink && (
              <div className="w-2/5 md:w-2/5">
                <img
                  src={imgLink}
                  alt={`${projectName} Preview`}
                  className="w-4/5 object-cover rounded-xl border border-card-primary-border hidden md:flex md:w-[250px]"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="grid grid-cols-2 mt-5 md:gap-2 items-start">
                  {Array.isArray(languages) && languages.length > 0 && (
                    <div className="space-y-2 items-start" id="clickable">
                      {languages.map((lang) => (
                        <div
                          key={lang}
                          className="items-center grid grid-cols-3"
                          onClick={() => onTechClick(lang)}
                          id="clickable"
                        >
                          <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center flex-wrap">
                            <img
                              src={langLogos[lang]}
                              alt={lang}
                              className="w-5 h-5"
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
                    <div className="space-y-2" id="clickable">
                      {libraries.map((lib) => (
                        <div
                          key={lib}
                          className="items-center grid grid-cols-3"
                          onClick={() => onTechClick(lib)}
                          id="clickable"
                        >
                          <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center">
                            <img
                              src={libLogos[lib]}
                              alt={lib}
                              className="w-5 h-5"
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
