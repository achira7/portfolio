import React, { useState } from "react";
import Button from "./Button";

const DownloadCV = () => {
  const [cvFormat, setCvFormat] = useState("pdf");

  const baseLink =
    "https://docs.google.com/document/d/1eKwEBL9Xr84v6u5D0hchfnOq_chXJ_VXyeUHkQWE4fU/export?format=";
  const downloadLink = `${baseLink}${cvFormat}`;

  const viewLink =
    "https://docs.google.com/document/d/1eKwEBL9Xr84v6u5D0hchfnOq_chXJ_VXyeUHkQWE4fU/preview";

  return (
    <div className="rounded-xl md:w-[500px] md:h-[200px] w-[85%] h-[30%] flex flex-col items-center shadow-2xl border-1 border-card-primary-border   bg-card-primary-top">
      <div className="flex content-center py-5 mb-1 px-7 items-center justify-center flex-col ">
        <div className="flex ">
          <div className="flex text-color-primary">

          </div>
          <span className=" text-color-primary font-caveat text-2xl font-semibold md:text-4xl">
            Get a Copy of my Resume
          </span>
        </div>

        <div className=" flex flex-row mt-2 md:mt- items-center justify-center mb-5">
          <div className="flex mx-3 ">
            <input
              type="radio"
              name="cv_format"
              value="pdf"
              size={3}
              checked={cvFormat === "pdf"}
              onChange={() => setCvFormat("pdf")}
              style={{ transform: "scale(1.5)" }}
            />
            <span className="font-inter ml-2 text-lg font-semibold text-color-secondary">
              PDF
            </span>
          </div>
          <div className="flex mx-3">
            <input
              type="radio"
              name="cv_format"
              value="docx"
              checked={cvFormat === "docx"}
              onChange={() => setCvFormat("docx")}
              style={{ transform: "scale(1.5)" }}
            />
            <span className="font-inter ml-2 text-lg font-semibold text-color-secondary">
              Docs
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Button
            name={`Download as a ${cvFormat.toUpperCase()}`}
            link={downloadLink}
            color={'blue'}
          />
          <a
            href={viewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-4 text-center md:text-right text-color-secondary"
          >
            View instead
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadCV;
