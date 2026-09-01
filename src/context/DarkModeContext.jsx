import React, { createContext, useState } from "react";

export const darkContext = createContext();
const DarkModeContext = ({ children }) => {
  let mediaQueryObj = window.matchMedia("(prefers-color-scheme: dark)");
  let isDarkMode = mediaQueryObj.matches;
  const [darkModeValue, setDarkModeValue] = useState(isDarkMode);

  return (
    <darkContext.Provider value={{ darkModeValue, setDarkModeValue }}>
      {children}
    </darkContext.Provider>
  );
};

export default DarkModeContext;
