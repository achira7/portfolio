import React, { useState } from "react";

import Button from "./Button";

const DownloadCV = () => {
  const [cvFormat, setCvFormat] = useState("pdf");

  const baseLink =
    "https://docs.google.com/document/d/1eKwEBL9Xr84v6u5D0hchfnOq_chXJ_VXyeUHkQWE4fU/export?format=";
  const downloadLink = `${baseLink}${cvFormat}`;

  return (
    <div className="inline-block m-5 border-card-primary-border flex-wrap rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-lg">
      <div className="items-center content-center pt-6 pb-5 px-7">
        <span className="text-color-primary font-inter text-2xl font-semibold">Get a Copy of my Resume</span>
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
        </div>
      </div>
    </div>
  );
};

export default DownloadCV;
