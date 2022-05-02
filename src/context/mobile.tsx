import { createContext, useContext } from "react";
import { useMediaQuery as useMediaQueryMui } from "@mui/material";

const MediaQueryContext = createContext({
  isMobile: false,
});

export const MediaQueryProvider = ({ children }) => {
  const isMobile = useMediaQueryMui("(max-width:700px)");

  return (
    <MediaQueryContext.Provider value={{ isMobile }}>
      {children}
    </MediaQueryContext.Provider>
  );
};

export const useMediaQuery = () => {
  const context = useContext(MediaQueryContext);
  return context;
};