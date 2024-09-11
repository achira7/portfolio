import React from 'react';

const Button = ({ name, link, color }) => {
  const isLinkProvided = !!link; 

  const colorClasses = {
    red: 'bg-color-red',
    blue: 'bg-color-primary',
    green: 'bg-color-green',
    yellow: 'bg-color-yellow',
  };

  const borderClasses = {
    red: 'border-border-red',
    blue: 'border-border-primary',
    green: 'border-border-green',
    yellow: 'border-border-yellow',
  }

  const selectedColorClass = colorClasses[color] || 'bg-default-button'; 
  const selectedBorderClass = borderClasses[color] || 'border-0';


  return (
    <a id="clickable" href={isLinkProvided ? link : '#'} target={isLinkProvided ? "_blank" : "_self"} className="z-20">
      <button
        type="button"
        className={`${selectedColorClass} ${selectedBorderClass} rounded-lg font-inter px-4 py-2 m-5 z-20 shadow-md ${!isLinkProvided && 'opacity-50 cursor-not-allowed'}`}
        disabled={!isLinkProvided} 
      >
        <span className='text-white' id="clickable">{name}</span>
      </button>
    </a>
  );
};

export default Button;
