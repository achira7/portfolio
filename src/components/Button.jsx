import React from 'react';

const Button = ({ name, link }) => {
  const isLinkProvided = !!link; 

  return (
    <a href={isLinkProvided ? link : '#'} target={isLinkProvided ? "_blank" : "_self"}>
      <button
        type="button"
        className={`bg-slate-400 border-2 border-slate-700 rounded-lg font-inter px-4 py-2 m-5 z-10 ${!isLinkProvided && 'opacity-50 cursor-not-allowed'}`}
        disabled={!isLinkProvided} 
      >
        {name}
      </button>
    </a>
  );
};

export default Button;
