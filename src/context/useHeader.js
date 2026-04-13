import { createContext, useContext } from "react";

const HeaderContext = createContext(null); // beri default value

export const HeaderProvider = HeaderContext.Provider;

// Custom hook — ini best practice di React modern
export const useHeader = () => {
  const context = useContext(HeaderContext);
  if (!context) throw new Error("useHeader harus dipakai dalam HeaderProvider");
  return context;
};

export default HeaderContext;
