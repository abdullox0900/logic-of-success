import React, { createContext, useContext, useState, useEffect } from 'react';

const TelegramColorSchemeContext = createContext();

export const TelegramColorSchemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const tg = window.Telegram.WebApp;

    tg.ready();

    setIsDarkMode(tg.colorScheme === 'dark');

    tg.onEvent('themeChanged', () => {
      setIsDarkMode(tg.colorScheme === 'dark');
    });
  }, []);

  return (
    <TelegramColorSchemeContext.Provider value={{ isDarkMode }}>
      {children}
    </TelegramColorSchemeContext.Provider>
  );
};

export const useTelegramColorScheme = () => useContext(TelegramColorSchemeContext);