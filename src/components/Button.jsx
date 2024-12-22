import React from 'react';
import { GitHub, Play, Behance } from '../assets/icons/icons';

const Button = ({ name, link, color, icon}) => {
  const isLinkProvided = !!link;

  // Function to check if the link is external
  const isExternalLink = (url) => {
    try {
      const linkUrl = new URL(url);
      return linkUrl.hostname !== window.location.hostname; // compare with current hostname
    } catch (error) {
      return false; // in case URL is invalid
    }
  };

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
  };

  const glowClasses = {
    red: 'hover:shadow-[0_0_5px_5px_rgba(var(--color-red-shadow))]',
    blue: 'hover:shadow-[0_0_5px_5px_rgba(var(--color-primary-shadow))]',
    green: 'hover:shadow-[0_0_5px_5px_rgba(var(--color-green-shadow))]',
    yellow: 'hover:shadow-[0_0_5px_5px_rgba(var(--color-yellow-shadow))]',
  };

  const iconClass = {
    play: <Play className="w-4 h-4 text-button-text mr-2" />,
    git: <GitHub className="w-6 h-6 text-button-text mr-2" />,
    behance: <Behance className="w-6 h-6 text-button-text mr-2" />
  };

  const selectedColorClass = colorClasses[color] || 'bg-default-button';
  const selectedBorderClass = borderClasses[color] || 'border-0';
  const selectedGlowClass = glowClasses[color] || 'color-primary';
  const selectedIconClass = iconClass[icon] || '';

  return (
    <a
      className="flex flex-row cursor-none"
      id="clickable"
      href={isLinkProvided ? link : '#'}
      target={isLinkProvided && isExternalLink(link) ? "_blank" : "_self"} // Open in new tab if external
      rel={isLinkProvided && isExternalLink(link) ? "noopener noreferrer" : undefined} //internal links
    >
      <button
        type="button"
        className={`flex items-center cursor-none justify-end ${selectedColorClass} ${selectedBorderClass} ${selectedGlowClass} rounded-lg font-inter px-4 py-2 shadow-md transition-all duration-300 hover:scale-105 ${!isLinkProvided && 'hidden'}`}
        disabled={!isLinkProvided}
      >
        <div id="clickable" className="hidden md:flex cursor-none">
          {selectedIconClass}
        </div>
        <span className='text-button-text text-sm md:text-base cursor-none' id="clickable">{name}</span>
      </button>
    </a>
  );
};

export default Button;
