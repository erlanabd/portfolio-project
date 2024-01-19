import React, { createContext, useState } from "react";

export const BurgerContext = createContext();

export const BurgerProvider = ({ children }) => {
  const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState(false);
  console.log(isActiveBurgerMenu);
  return (
    <BurgerContext.Provider
      value={{ isActiveBurgerMenu, setIsActiveBurgerMenu }}
    >
      {children}
    </BurgerContext.Provider>
  );
};
