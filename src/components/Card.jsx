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
        <div className="mb-10 bg-card-primary border border-card-primary-border rounded-xl shadow-xl">
        <div className="w-full flex flex-col md:flex-row px-6 py-6">
          {imgLink && (
            <div className="w-full md:w-2/5 pr-4">
              <img
                src={imgLink}
                alt={`${projectName} Preview`}
                className="w-full h-auto object-cover rounded-xl border border-card-primary-border"
              />
              <div className="grid grid-cols-2 mt-4 gap-4">
                {Array.isArray(languages) && languages.length > 0 && (
                  <div className="space-y-2">
                    {languages.map((lang) => (
                      <div
                        key={lang}
                        className="flex items-center space-x-3"
                        onClick={() => onTechClick(lang)}
                      >
                        <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                          <img src={langLogos[lang]} alt={lang} className="w-6 h-6" />
                        </div>
                        <span className="capitalize text-color-secondary">{lang}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
      
          {/* Text and Button Section */}
          <div className="w-full md:w-3/5 flex flex-col justify-between">
            <h5 className="text-3xl font-bold text-color-primary capitalize">{projectName}</h5>
            <p className="text-base text-color-secondary mt-1">{description}</p>
            <div className="flex justify-end mt-4">
              <Button link={gitLink} name={"Git Repo"} color="stone-500" />
              <Button link={demoLink} name={"Live Demo"} color="card-secondary" className="ml-3" />
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
