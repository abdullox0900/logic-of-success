import { createContext, useContext, useState, useEffect } from 'react';

const TelegramThemeContext = createContext();

export const TelegramThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const tg = window.Telegram.WebApp;

    tg.ready();

    const currentTheme = {
      backgroundColor: tg.backgroundColor,
      textColor: tg.textColor,
      hintColor: tg.hint_color,
      linkColor: tg.link_color,
      buttonColor: tg.button_color,
      buttonTextColor: tg.button_text_color,
      headerBackgroundColor: tg.header_bg_color,
      isDarkMode: tg.colorScheme === 'dark'
    };

    setTheme(currentTheme);

    tg.onEvent('themeChanged', () => {
      setTheme({
        ...currentTheme,
        backgroundColor: tg.backgroundColor,
        textColor: tg.textColor,
        hintColor: tg.hint_color,
        linkColor: tg.link_color,
        buttonColor: tg.button_color,
        buttonTextColor: tg.button_text_color,
        headerBackgroundColor: tg.header_bg_color,
        isDarkMode: tg.colorScheme === 'dark'
      });
    });
  }, []);

  return (
    <TelegramThemeContext.Provider value={{ theme }}>
      {children}
    </TelegramThemeContext.Provider>
  );
};

export const useTelegramTheme = () => useContext(TelegramThemeContext);