import React, { useEffect } from 'react';
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
  };

  const iconClass = {
    play: <Play className="w-4 h-4 text-white mr-2" />,
    git: <GitHub className="w-6 h-6 text-white mr-2" />
  };

  const selectedColorClass = colorClasses[color] || 'bg-default-button';
  const selectedBorderClass = borderClasses[color] || 'border-0';
  const selectedIconClass = iconClass[icon] || '';

  useEffect(() => {
    const rippleBtn = document.getElementById("clickable");
    let ripples = document.createElement("span");
    let cleartimeout;

    const handleMouseOver = (e) => {
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;
      ripples.style.left = x + "px";
      ripples.style.top = y + "px";
      rippleBtn.appendChild(ripples);

      cleartimeout = setTimeout(() => {
        ripples.remove();
      }, 1000);
    };

    const handleMouseOut = () => {
      ripples.remove(cleartimeout);
    };

    rippleBtn.addEventListener("mouseover", handleMouseOver);
    rippleBtn.addEventListener("mouseout", handleMouseOut);

    // Clean up event listeners
    return () => {
      rippleBtn.removeEventListener("mouseover", handleMouseOver);
      rippleBtn.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <a
      className="flex flex-row cursor-none"
      id="clickable"
      href={isLinkProvided ? link : '#'}
      target={isLinkProvided ? "_blank" : "_self"}
    >
      <button
        type="button"
        className={`flex items-center cursor-none hover:ripple justify-end ${selectedColorClass} ${selectedBorderClass} rounded-lg font-inter px-4 py-2 m-5 shadow-md ${!isLinkProvided && 'hidden'}`}
        disabled={!isLinkProvided}
      >
        <div id="clickable" className="hidden md:flex cursor-none">
          {selectedIconClass}
        </div>
        <span className='text-white text-sm md:text-base cursor-none' id="clickable">{name}</span>
      </button>
    </a>
  );
};

export default Button;
