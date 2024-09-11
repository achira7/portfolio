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
        <div className="bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-xl z-20">
          <div className="w-full flex px-6 py-6">
            {imgLink && (
              <div className="w-1/3 pr-4">
                <img
                  src={imgLink}
                  alt={`${projectName} Preview`}
                  className="w-full object-cover rounded-xl border border-card-primary-border"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="flex mt-4" >
                  {Array.isArray(languages) && languages.length > 0 && (
                    <div className="w-1/2" >
                      <div className="flex flex-wrap" >
                        {languages.map((lang) => (
                          <div
                            key={lang}
                            className="my-1 flex items-center text-color-secondary mr-3"
                            onClick={() => onTechClick(lang)}
                            id="clickable" 
                          >
                            <div className="bg-white rounded-md p-1 mr-2">
                              <img
                                src={langLogos[lang]}
                                alt={lang}
                                className="w-6 h-6"
                              />
                            </div>
                            <span className="capitalize">{lang}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {Array.isArray(libraries) && libraries.length > 0 && (
                    <div className="w-1/2" >
                      <div className="flex flex-wrap">
                        {libraries.map((lib) => (
                          <div
                            key={lib}
                            className="my-1 flex items-center text-color-secondary mr-3"
                            onClick={() => onTechClick(lib)}
                            id="clickable" 
                          >
                            <div className="bg-white rounded-md p-1 mr-2">
                              <img
                                src={libLogos[lib]}
                                alt={lib}
                                className="w-6 h-6"
                                id="clickable"
                              />
                            </div>
                            <span className="capitalize ">{lib}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Text and Button Section */}
            <div className="w-2/3">
              <h5 className="mb-2 text-3xl font-inter font-bold text-color-primary capitalize">
                {projectName}
              </h5>
              <p className="font-inter text-lg text-color-secondary">
                {description}
              </p>

              {/* Buttons */}
              <div className="flex mt-6">
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
