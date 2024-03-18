import { useMutation, useQuery } from '@tanstack/react-query';
import { editUser } from '../services/users';
import { User } from '../types';

export const useMutateUser = () => {
  const { mutate, mutateAsync } = useMutation({
    mutationFn: (data: User) => {
      delete data.companie;
      delete data.department;

      return editUser(data);
    },
  });

  const mutateAsyncSubmit = (data) => {
    mutateAsync(data);
  };

  return { mutate, mutateAsyncSubmit };
};
