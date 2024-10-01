import React, { useState } from "react";
import Button from "./Button";

const DownloadCV = () => {
  const [cvFormat, setCvFormat] = useState("pdf");

  const baseLink =
    "https://docs.google.com/document/d/1eKwEBL9Xr84v6u5D0hchfnOq_chXJ_VXyeUHkQWE4fU/export?format=";
  const downloadLink = `${baseLink}${cvFormat}`;

  const viewLink = "https://docs.google.com/document/d/1eKwEBL9Xr84v6u5D0hchfnOq_chXJ_VXyeUHkQWE4fU/preview";

  return (
    <div className="rounded-xl md:w-[500px] md:h-[200px] w-[85%] h-[30%] flex flex-col items-center pt-2 bg-white transform rotate-[3deg] shadow-xl border-2 border-slate-300">
      <div className="flex content-center pt-6 pb-5 px-7 items-center justify-center flex-col ">
        <div className="flex ">
          <span className="text-color-primary font-caveat text-2xl font-semibold md:text-3xl">
            Get a Copy of my Resume
          </span>
        </div>

        <div className=" flex flex-row mt-2 items-center justify-center mb-5">
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
            <span className="font-inter ml-2 text-lg font-semibold">PDF</span>
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
            <span className="font-inter ml-2 text-lg font-semibold">Docs</span>
          </div>
        </div>

        <div className="flex items-center justify-center" >
          <Button
            name={`Download as a ${cvFormat.toUpperCase()}`}
            link={downloadLink}
          />
          <a
            href={viewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-4 text-center md:text-right"
          >
            View instead
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadCV;
