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
}) => {
  return (
    <>
      {type === "project" ? (
        <div className="m-5 bg-card-primary shadow-lg border-color-primary z-10">
          <div className="p-4">
            <h5 className="mb-2 text-2xl font-inter font-bold tracking-tight text-color-primary">
              {projectName}
            </h5>
            <p className="font-normal text-color-secondary">{description}</p>

            <div className="flex flex-initial">
              <div className="flex mx-5 my-2">
                {Array.isArray(languages) && languages.length > 0 && (
                  <div className="my-2">
                    {languages.map((lang) => (
                      <div
                        key={lang}
                        className="my-2 flex items-center text-color-primary "
                      >
                        <div className="bg-white p-1 mr-2">
                        <img
                          src={langLogos[lang]}
                          alt={lang}
                          className="w-6 h-6 "
                        />
                        </div>
                        <span className="capitalize">{lang}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex mx-5 my-2">
                {Array.isArray(libraries) && libraries.length > 0 && (
                  <div  className="my-2">
                    {libraries.map((lib) => (
                      <div
                        key={lib}
                        className="my-2 flex items-center text-color-primary"
                      >
                        <div className="bg-white p-1 mr-2">
                        <img
                          src={libLogos[lib]}
                          alt={lib}
                          className="w-6 h-6"
                        />
                        </div>
                        <span className="capitalize">{lib}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <Button link={gitLink} name={"Git Repo"} color={`stone-500`}/>
            <Button link={demoLink} name={"Live Demo"} color={`card-secondary`} />
          </div>
        </div>
      ) : (
        <div>
          <p>Other</p>
        </div>
      )}
    </>
  );
};

export default Card;
