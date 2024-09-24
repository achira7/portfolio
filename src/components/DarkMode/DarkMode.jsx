import React, { useEffect, useState } from "react";
import { Sun } from "../../assets/icons/icons";
import { Moon } from "../../assets/icons/icons";
import "./DarkMode.css";

const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('mode');
        if (savedMode === 'dark-mode') {
            setIsDarkMode(true);
            document.body.classList.add('dark-mode');
        } else {
            setIsDarkMode(false);
            document.body.classList.remove('dark-mode');
        }
    }, []);

    const handleToggle = () => {
        if (isDarkMode) {
            localStorage.setItem('mode', 'light-mode');
            document.body.classList.remove('dark-mode');
            setIsDarkMode(false);
        } else {
            localStorage.setItem('mode', 'dark-mode');
            document.body.classList.add('dark-mode');
            setIsDarkMode(true);
        }
    };

    return (
        <div className='dark_mode'>
    <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        checked={isDarkMode}
        onChange={handleToggle}
    />
    <label className='dark_mode_label' htmlFor='darkmode-toggle'>
        <Sun />
        <Moon />
    </label>
</div>

    );
};

export default DarkMode;
