import React from 'react'

//Assets
import achiraImage from "../assets/achira.png";
import overlayImage from "../assets/halftone_overlay.jpg";
import gif from "../assets/23.gif";

const Projects = () => {
  return (
    <div>
              <div className="h-screen flex flex-col flex-wrap top-0 left-0">
        <h1
          id="achira"
          className="text-9xl font-bold text-copy-primary font-ibm top-0 mx-5 mt-5 flex flex-wrap"
        >
          ACHIRA
        </h1>

        <h1
          id="silva"
          className="text-9xl font-bold text-copy-primary font-ibm mx-5"
        >
          SILVA
        </h1>

        <div className="flex items-center justify-center w-[100] h-[200]">
          <div className="w-1/4">
            <img src={achiraImage} className="absolute top-0 grayscale"/>
            <img
              src={gif}
              className="absolute top-0 mix-blend-soft-light opacity-50"
              style={{
                maskImage: `url(${achiraImage})`,
                WebkitMaskImage: `url(${achiraImage})`,
              }}
            />
            <img
              src={overlayImage}
              className="absolute top-0 mix-blend-screen"
              style={{
                maskImage: `url(${achiraImage})`,
                WebkitMaskImage: `url(${achiraImage})`,
              }}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects