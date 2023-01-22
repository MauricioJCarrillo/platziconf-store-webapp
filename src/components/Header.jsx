import { useState, useEffect } from "react";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <div className="Header">
      <h1>React Hooks</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
      <button
        type="button"
        onClick={() => setDarkMode((prevState) => !prevState)}
      >
        {darkMode ? "Dark Mode 2" : "Light Mode 2"}
      </button>
    </div>
  );
};
