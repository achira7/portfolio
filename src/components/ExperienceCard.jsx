import React from "react";
import { useState } from "react";
import Button from "./Button";
import ImageOverlay from "./ImageOverlay"; 

const ExperienceCard = ({
  title,
  position,
  description,
  points,
  skills,
  hard_skills,
  image,
  link,
}) => {
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [isImageOpen, setIsImageOpen] = useState(false); 

  return (
    <div
      id={title.replace(/\s+/g, '-').toLowerCase()} 
      className="mb-8 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-xl z-20"
    >
      <div className="pt-1 md:p-7">
        <div className="grid grid-rows-[auto_auto_auto] ">
          <div className="flex flex-col h-fit ml-8 mt-5">
            <h1 className="flex font-inter text-xl md:text-3xl text-color-primary font-bold">
              {title}
            </h1>

            <h1 className="flex font-inter text-lg md:text-xl text-color-tertiary font-semibold">
              {position}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[60%_40%] justify-items-center items-center">
            <div className="flex px-5 py-3 md:p-10 justify-center items-center ">
              <div className="">
                <p className="text-sm md:text-base font-inter text-color-secondary">
                  {description}
                </p>
              </div>
            </div>

            {/* Image */}
            {isImageVisible && (
              <div className="md:flex w-[65%] mb-5 mt-3 justify-center items-center">
                <div className="flex justify-center items-center">
                  {isImageVisible && (
                    <img
                      id="clickable"
                      src={image}
                      alt={title}
                      className="object-cover rounded-xl border border-card-primary-border hover:scale-105 hover:shadow-md hover:shadow-color-primary cursor-pointer"
                      onError={() => setIsImageVisible(false)}
                      onClick={() => setIsImageOpen(true)}
                    />
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="px-8">
            <ul className="list-disc ml-3 md:ml-6 md:mt-2">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="text-color-secondary font-inter text-sm md:text-lg"
                >
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 w-full">
              <div className="flex">
                <p className="text-color-secondary font-inter text-sm md:text-lg">
                  <strong>Soft Skills:</strong> {skills.join(", ")}
                </p>
              </div>

              <div className="flex mt-3">
                <p className="text-color-secondary text-sm font-inter md:text-lg">
                  <strong>Hard Skills:</strong> {hard_skills.join(", ")}
                </p>
              </div>
            </div>

            <div className="my-7 flex justify-center items-center">
              <Button
                className="flex"
                color={"blue"}
                name={"See Work"}
                link={link}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image Overlay Component */}
      <ImageOverlay 
        imgLink={image} 
        projectName={title} 
        isImageOpen={isImageOpen} 
        setIsImageOpen={setIsImageOpen} 
      />
    </div>
  );
};

export default ExperienceCard;
