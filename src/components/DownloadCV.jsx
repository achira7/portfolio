import React, { useState } from "react";
import Button from "./Button";

const DownloadCV = () => {
  const [cvFormat, setCvFormat] = useState("pdf");

  const baseLink =
    "https://docs.google.com/document/d/1eKwEBL9Xr84v6u5D0hchfnOq_chXJ_VXyeUHkQWE4fU/export?format=";
  const downloadLink = `${baseLink}${cvFormat}`;

  const viewLink = "https://docs.google.com/document/d/1eKwEBL9Xr84v6u5D0hchfnOq_chXJ_VXyeUHkQWE4fU/preview";

  return (
    <div className="w-full flex flex-col items-center pt-2 bg-white transform rotate-[3deg] shadow-md">
      <div className="flex content-center pt-6 pb-5 px-7 items-center justify-center flex-col">
        <div className="flex">
          <span className="text-color-primary font-caveat text-2xl font-semibold md:text-3xl">
            Get a Copy of my Resume
          </span>
        </div>

        <div className=" flex flex-row mt-2 items-center justify-center">
          <div className="flex mx-3">
            <input
              type="radio"
              name="cv_format"
              value="pdf"
              checked={cvFormat === "pdf"}
              onChange={() => setCvFormat("pdf")}
            />
            <span className="font-inter text-color-secondary ml-2">PDF</span>
          </div>
          <div className="flex mx-3">
            <input
              type="radio"
              name="cv_format"
              value="docx"
              checked={cvFormat === "docx"}
              onChange={() => setCvFormat("docx")}
            />
            <span className="font-inter text-color-secondary ml-2">Docs</span>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Button
            name={`Download as a ${cvFormat.toUpperCase()}`}
            link={downloadLink}
          />
          <a
            href={viewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-4"
          >
            View instead
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadCV;
