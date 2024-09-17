import React from 'react';

import { GitHub, Play } from '../assets/icons/icons';

const Button = ({ name, link, color, icon }) => {
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

  const iconClass = {
    play: <Play className="w-4 h-4 text-white mr-2"/>,
    git: <GitHub className="w-6 h-6 text-white mr-2"/>
  }

  const selectedColorClass = colorClasses[color] || 'bg-default-button'; 
  const selectedBorderClass = borderClasses[color] || 'border-0';
  const selectedIconClass = iconClass[icon] || ''


  return (
    <a className="flex flex-row " id="clickable" href={isLinkProvided ? link : '#'} target={isLinkProvided ? "_blank" : "_self"}>
      <button
        type="button"
        className={`flex items-center justify-center ${selectedColorClass} ${selectedBorderClass} rounded-lg font-inter px-4 py-2 m-5 shadow-md ${!isLinkProvided && 'opacity-50 cursor-not-allowed'}`}
        disabled={!isLinkProvided} 
      >
        <div className="flex xs:hidden">
          {selectedIconClass}
        </div>
        <span className='text-white' id="clickable">{name}</span>
      </button>
    </a>
  );
};

export default Button;
