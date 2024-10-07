import React, { useState } from "react";
import ImageOverlay from "./ImageOverlay";

const Polaroid = ({ image, name, align }) => {
  const [isImageOpen, setIsImageOpen] = useState(false); // State to handle image view

  // Determine rotation based on alignment
  const rotation =
    align === "left" ? "-rotate-3" : align === "right" ? "rotate-3" : "";

  return (
    <>
      {/* Polaroid Component */}
      <div
        id="floating"
        className="hover:scale-105  hover:transition-transform duration-300 cursor-none"
      >
        <div
          id="clickable"
          className={`clickable hover:shadow-md hover:shadow-color-primary w-[250px] md:w-[350px] align-top flex flex-col flex-wrap bg-color-polaroid p-5 border border-gray-300 shadow-xl ${rotation} ${
            align === "left" ? "ml-7" : align === "right" ? "mr-5" : ""
          }`}
        >
          {/* Image Clickable to Open Overlay */}
          <img
            id="clickable"
            src={image}
            alt={name}
            className="object-cover "
            onClick={() => setIsImageOpen(true)}
          />
          <p className="text-center font-inter font-semibold mt-2">{name}</p>
        </div>
      </div>

      {/* Image Overlay Component */}
      <ImageOverlay
        imgLink={image} // Pass the image link
        projectName={name} // Pass the name
        isImageOpen={isImageOpen} // Control overlay visibility
        setIsImageOpen={setIsImageOpen} // Function to close overlay
      />
    </>
  );
};

export default Polaroid;
