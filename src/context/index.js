import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Context.Provider
      value={{
        isDark: isDarkMode,
        handleOnChangeDarkMode: setIsDarkMode
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
