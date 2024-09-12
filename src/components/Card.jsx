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
}) => {
  return (
    <>
      {type === "project" ? (
        <div className="mb-10 mx-5 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-xl z-20">
          <div className="w-full flex px-6 py-6">
            {imgLink && (
              <div className="w-2/5 pr-4">
                <img
                  src={imgLink}
                  alt={`${projectName} Preview`}
                  className="w-full object-cover rounded-xl border border-card-primary-border"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="grid grid-cols-2 mt-4" > {/* Using grid with 2 columns */}
                  {Array.isArray(languages) && languages.length > 0 && (
                    <div className="space-y-2">
                      {languages.map((lang) => (
                        <div
                          key={lang}
                          className="items-center grid grid-cols-3"
                          onClick={() => onTechClick(lang)}
                          id="clickable"
                        >
                          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                            <img
                              src={langLogos[lang]}
                              alt={lang}
                              className="w-6 h-6"
                              id="clickable"
                            />
                          </div>

                          <div>
                            <span className="capitalize text-color-secondary">{lang}</span>
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
                            />
                          </div>
                          <span className="capitalize text-color-secondary">{lib}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Text and Button Section */}
            <div className="w-2/3 flex flex-col justify-between h-full">
              <h5 className="mb-1 text-3xl font-inter font-bold text-color-primary capitalize">
                {projectName}
              </h5>
              <p className="font-inter text-base text-color-secondary mt-1">
                {description}
              </p>

              {/* Buttons */}
              <div className="flex justify-end mt-4">
                <Button link={gitLink} name={"Git Repo"} color={`stone-500`} id="clickable" />
                <Button
                  link={demoLink}
                  name={"Live Demo"}
                  color={`card-secondary`}
                  className="ml-3"
                  id="clickable"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="m-5 bg-card-primary border border-card-primary-border z-10 rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top">
          <div className="px-6 py-6"></div>
        </div>
      )}
    </>
  );
};

export default Card;
