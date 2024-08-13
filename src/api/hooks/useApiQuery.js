import { useQuery } from 'react-query';
import api from '../api';

export const useApiQuery = (endpoint, options = {}) => {
  const fetchData = async () => {
    const response = await api.get(endpoint);
    return response.data;
  };

  return useQuery(endpoint, fetchData, {
    refetchOnWindowFocus: false,
    ...options,
  });
};