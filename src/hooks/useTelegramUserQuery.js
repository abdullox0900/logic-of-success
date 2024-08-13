import { useQuery } from 'react-query';

const fetchTelegramUser = () => {
  return new Promise((resolve) => {
    const tg = window.Telegram.WebApp;
    tg.ready();
    resolve(tg.initDataUnsafe.user);
  });
};

export const useTelegramUserQuery = () => {
  return useQuery('telegramUser', fetchTelegramUser, {
    staleTime: Infinity,
    cacheTime: Infinity, 
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};