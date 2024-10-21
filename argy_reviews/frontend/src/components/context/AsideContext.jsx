import React, { createContext, useContext, useState } from 'react';

const AsideContext = createContext();

export const useAside = () => useContext(AsideContext);

export const AsideProvider = ({ children }) => {
  const [asideIsOpen, setAsideIsOpen] = useState(true);

  return (
    <AsideContext.Provider value={{ asideIsOpen, setAsideIsOpen }}>
      {children}
    </AsideContext.Provider>
  );
};
