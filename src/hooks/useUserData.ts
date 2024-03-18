import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../services/users';

export const useGetUsers = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: getUsers,
    queryKey: ['usersList'],
    // retry: false,
    refetchInterval: 30 * 1000,
  });

  return { data, isLoading, isError, error };
};
