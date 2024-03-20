import { useQuery } from '@tanstack/react-query';
import { getCompanie, getCompanies } from '../services/users';

export const useGetCompanies = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: getCompanies,
    queryKey: ['companiesList'],
    // retry: false,
    refetchInterval: 30 * 1000,
  });

  return { data, isLoading, isError, error };
};

export const useGetCompanie = (id: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: () => getCompanie(id),
    queryKey: ['companie'],
    retry: false
  });

  return { data, isLoading, isError, error };
};