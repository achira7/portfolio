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
        <div className="m-5 dark-mode bg-card rounded-xl">
          <div className="p-4 z-10">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-copy-primary">
              {projectName}
            </h5>
            <p className="font-normal text-copy-secondary">{description}</p>

            <div className="flex flex-initial">
              <div className="flex mx-5 my-2">
                {Array.isArray(languages) && languages.length > 0 && (
                  <div className="my-2">
                    {languages.map((lang) => (
                      <div
                        key={lang}
                        className="flex items-center text-copy-primary"
                      >
                        <img
                          src={langLogos[lang]}
                          alt={lang}
                          className="w-6 h-6 mr-2"
                        />
                        <span>{lang}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex mx-5 my-2">
                {Array.isArray(libraries) && libraries.length > 0 && (
                  <div>
                    {libraries.map((lib) => (
                      <div
                        key={lib}
                        className="my-2 flex items-center text-copy-primary"
                      >
                        <img
                          src={libLogos[lib]}
                          alt={lib}
                          className="w-6 h-6 mr-2"
                        />
                        <span className="capitalize">{lib}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <Button link={gitLink} name={"Git Repo"} />
            <Button link={demoLink} name={"Live Demo"} />
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
