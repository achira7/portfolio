import React from "react";
import Button from "./Button";

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
  return (
    <div
      id={title}
      className="mb-8 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-xl z-20"
    >
      <div className="p-5  md:p-7">
        <div className="grid grid-rows-[17%_90%] items-center">
          <div className=" flex flex-wrap flex-col pt-2 bg-yellow-300">
            <h1 className="flex font-inter text-xl md:text-3xl text-color-primary font-bold">
              {title}
            </h1>

            <h1 className="flex font-inter text-lg md:text-xl text-color-tertiary font-semibold">
              {position}
            </h1>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-[60%_40%]">
            <div className="">
              <p className="text-sm md:text-base font-inter text-color-secondary md:mt-1">
                {description}
              </p>

              <ul className="list-disc ml-6 mt-2">
                {points.map((point, index) => (
                  <li
                    key={index}
                    className="text-color-secondary font-inter text-sm md:text-lg"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              {/* Displaying skills as a comma-separated list */}
              <div className="mt-4">
                <div className="flex">
                  <p className="text-color-secondary font-inter text-sm md:text-lg">
                    <strong>Soft Skills:</strong> {skills.join(", ")}
                  </p>
                </div>

                <div className="flex mt-1">
                  <p className="text-color-secondary text-sm font-inter md:text-lg">
                    <strong>Hard Skills:</strong> {hard_skills.join(", ")}
                  </p>
                </div>
                <div className="m-5 bg-purple-400">
                  <Button color={"blue"} name={"See Work"} link={link} />
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="hidden md:flex items-center justify-end">
              <div className=" m-5">
                <img src={image} alt={title} className="flex rounded-2xl " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
