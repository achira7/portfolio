import React from "react";

//import componenets
import Button from "../components/Button";
import DarkMode from "../components/DarkMode/DarkMode";
import GradientComponent from "../components/GradientComponent";

const Test = () => {
  return (
    <div className="bg-background  mb-36 ">
      
      <div className="">
        <h1 className="text-3xl font-bold text-color-primary font-inter top-0 mx-5 mt-5 flex flex-wrap">
        Primary
      </h1>

      <h1 className="text-3xl font-bold text-color-secondary font-inter top-0 mx-5 mt-5 flex flex-wrap">
        Secondary
      </h1>

      <h1 className="text-3xl font-bold text-color-tertiary font-inter top-0 mx-5 mt-5 flex flex-wrap">
        Tertiary
      </h1>

      <h1 className="text-color-green font-inter font-bold text-3xl">Green</h1>
      <h1 className="text-color-red font-inter font-bold text-3xl">Red</h1>
      <h1 className="text-color-yellow font-inter font-bold text-3xl">
        Yellow
      </h1>
      </div>
      
      {/* <h1 className="text-copy-primary font-inter font-bold text-3xl">
        Primary
      </h1>
      <h1 className="text-copy-primary font-inter font-bold text-3xl">
        Primary
      </h1> */}

      <Button link={"https://devicon.dev/"} name="Okay!" color={"green"} />
      <Button link={"https://devicon.dev/"} name="Sus!!" color={"yellow"} />
      <Button link={"https://devicon.dev/"} name="DANGER" color={"red"} />

<div>
      <div className="bg-gradient-to-t from-card-primary-bottom to-card-primary-top w-80 h-30 m-10">
        <span className="px-5 py-10 text-color-primary">Card Primary</span>
        <Button link={"https://devicon.dev/"} name="Okay!" color={"green"} />
      </div>

      <button link={'google.com'}>
  <GradientComponent colorA={'#341abc'} colorB={'#341abc'} colorC={'#341abc'} />
</button>

      <div className="bg-card-secondary w-80 h-30 m-10">
        <span className="px-5 py-10 ">Card Secondary</span>
        <Button link={"https://devicon.dev/"} name="DANGER" color={"red"} />
      </div>

      
      </div>
    </div>
  );
};

export default Test;
