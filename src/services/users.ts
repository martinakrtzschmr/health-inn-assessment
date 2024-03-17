import { User } from '../types';

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch('http://localhost:3003/users?_embed=companie&_embed=department');
  const data: User[] = await response.json();
  return data;
};

export const getUser = async (id: string): Promise<User> => {
  const response = await fetch(`http://localhost:3003/users/${id}`);
  const data: User = await response.json();
  return data;
};

export const addUser = async (user: User): Promise<User> => {
  const response = await fetch('http://localhost:3003/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  const data: User = await response.json();
  return data;
};

export const editUser = async (user: User): Promise<User> => {
  const response = await fetch(`http://localhost:3003/users/${user.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  const data: User = await response.json();
  return data;
};

export const deleteUser = async (id: string): Promise<User> => {
  const response = await fetch(`http://localhost:3003/users/${id}`, {
    method: 'DELETE',
  });
  const data: User = await response.json();
  return data;
};
