import { useQuery } from '@tanstack/react-query';
import { getDepartment, getDepartments } from '../services/users';

export const useGetDepartments = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: getDepartments,
    queryKey: ['departmentsList'],
    // retry: false,
    refetchInterval: 30 * 1000,
  });

  return { data, isLoading, isError, error };
};

export const useGetDepartment = (id: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: () => getDepartment(id),
    queryKey: ['department'],
    retry: false
  });

  return { data, isLoading, isError, error };
};