import React from 'react';

const Button = ({ name, link, color }) => {
  const isLinkProvided = !!link; 

  const colorClasses = {
    red: 'bg-color-red',
    blue: 'bg-blue-500 hover:bg-blue-600',
    green: 'bg-color-green',
    yellow: 'bg-color-yellow',
  };

  const selectedColorClass = colorClasses[color] || 'bg-gray-500 hover:bg-gray-600'; // Fallback color


  return (
    <a href={isLinkProvided ? link : '#'} target={isLinkProvided ? "_blank" : "_self"}>
      <button
        type="button"
        className={`${selectedColorClass} y border-2 border-slate-700 font-inter px-4 py-2 m-5 z-10 ${!isLinkProvided && 'opacity-50 cursor-not-allowed'}`}
        disabled={!isLinkProvided} 
      >
        {name}
      </button>
    </a>
  );
};

export default Button;
