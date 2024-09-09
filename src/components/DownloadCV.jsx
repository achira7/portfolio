import React, { useState } from "react";

import Button from "./Button";

const DownloadCV = () => {
  const [cvFormat, setCvFormat] = useState("pdf");

  const baseLink =
    "https://docs.google.com/document/d/1eKwEBL9Xr84v6u5D0hchfnOq_chXJ_VXyeUHkQWE4fU/export?format=";
  const downloadLink = `${baseLink}${cvFormat}`;

  return (
    <div>
      <div className="flex-initial">
        <span className="text-color-primary">Get a Copy of my Resume</span>
        <div className="flex">
          <input
            type="radio"
            name="cv_format"
            value="pdf"
            checked={cvFormat === "pdf"}
            onChange={() => setCvFormat("pdf")}
          />
          <span className="font-inter">PDF</span>
        </div>
        <div className="flex">
          <input
            type="radio"
            name="cv_format"
            value="docx"
            checked={cvFormat === "docx"}
            onChange={() => setCvFormat("docx")}
          />
          <span className="font-inter">Docs</span>
        </div>
        <div className="flex">
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
