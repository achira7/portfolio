import React from "react";
import { CloseIcon } from "../assets/icons/icons";

const ImageOverlay = ({ imgLink, projectName, isImageOpen, setIsImageOpen }) => {
  return (
    <>
      {isImageOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-sky-950 bg-opacity-65 z-30">
          <div className="relative w-auto h-auto p-4 bg-card-primary-top rounded-lg shadow-xl">
            <button
              id="clickable"
              onClick={() => setIsImageOpen(false)}
              className="absolute top-5 right-5"
            >
              <CloseIcon
                id="clickable"
                className="w-7 h-7 text-color-red z-20 cursor-none shadow-lg"
              />
            </button>
            <img
              src={imgLink}
              alt={`${projectName} Full View`}
              className="w-full h-full object-contain max-h-[90vh] max-w-[90vw] rounded-lg p-10"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageOverlay;
