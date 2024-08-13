import { useMutation } from 'react-query';
import api from '../api';

export const useApiMutation = (endpoint) => {
  const mutation = async (data) => {
    const response = await api.post(endpoint, data);
    return response.data;
  };

  return useMutation(mutation);
};