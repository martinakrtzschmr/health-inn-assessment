import { useQuery } from '@tanstack/react-query';
import { getUser, getUsers } from '../services/users';

export const useGetUsers = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: getUsers,
    queryKey: ['usersList'],
    // retry: false,
    refetchInterval: 30 * 1000,
  });

  return { data, isLoading, isError, error };
};

export const useGetUser = (id) => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: () => getUser(id),
    queryKey: ['user'],
    retry: false,
    // refetchInterval: 30 * 1000,
  });

  return { data, isLoading, isError, error };
};