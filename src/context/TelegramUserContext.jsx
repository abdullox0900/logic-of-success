import { createContext, useContext, useState, useEffect } from 'react';

const TelegramContext = createContext();

export const TelegramProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram.WebApp;

    tg.ready();

    const currentUser = tg.initDataUnsafe.user;
    setUser(currentUser);
  }, []);

  return (
    <TelegramContext.Provider value={{ user }}>
      {children}
    </TelegramContext.Provider>
  );
};

export const useTelegram = () => useContext(TelegramContext);