import React, { createContext, useContext } from "react";
import { useColorScheme } from "react-native";
import lightTheme from "../styles/lightTheme";
import darkTheme from "../styles/darkTheme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme() || "dark";
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
