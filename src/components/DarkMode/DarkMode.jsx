import React, { useEffect, useState } from "react";
import styled from "styled-components";

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark-mode") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark-mode");
    }
  }, []);

  const handleToggle = () => {
    if (isDarkMode) {
      localStorage.setItem("mode", "light-mode");
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      setIsDarkMode(false);
    } else {
      localStorage.setItem("mode", "dark-mode");
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      setIsDarkMode(true);
    }
  };

  return (
    <StyledWrapper>
      <label className="switch md:ml-4 hover:scale-110 hover:shadow-color-primary-shadow hover:shadow-xl transition-all duration-300" id="clickable">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={handleToggle}
          aria-label="Toggle dark mode"
        />
        <span className="slider">
          {isDarkMode ? <span className="icon moon"></span> : <span className="icon sun"></span>}
        </span>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .switch {
    display: block;
    --width-of-switch: 3.5em;
    --height-of-switch: 2em;
    --size-of-icon: 1.4em;
    --slider-offset: 0.3em;
    position: relative;
    width: var(--width-of-switch);
    height: var(--height-of-switch);
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f4f4f5;
    transition: 0.4s;
    border-radius: 30px;
    border: 2px solid rgba(var(--color-primary));
    box-shadow: 0 0 3px 3px rgba(var(--normal-shadow));
  }

  .slider:before {
    content: "";
    position: absolute;
    height: var(--size-of-icon);
    width: var(--size-of-icon);
    border-radius: 20px;
    left: var(--slider-offset);
    top: 50%;
    transform: translateY(-50%);
    transition: 0.4s;
    hover:scale-110;
    hover:shadow-color-primary-shadow;
    hover:shadow-xl;
    transition-all;
    duration-300;
  }

  input:checked + .slider {
    background-color: #1d1d1f;
  }

  input:checked + .slider:before {
    left: calc(100% - (var(--size-of-icon) + var(--slider-offset)));
  }

  .icon {
    position: absolute;
    width: var(--size-of-icon);
    height: var(--size-of-icon);
    top: 50%;
    transform: translateY(-50%);
  }

  .sun {
    left: 0.3em;
    background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
    border-radius: 50%;
  }

  .moon {
    right: 0.3em;
    background: #1d1d1f;
    border-radius: 50%;
    box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
  }
`;

export default DarkModeSwitch;
