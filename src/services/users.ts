import { Companie, Department, User, UserPostData } from '../types';

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(
      'http://localhost:3003/users/?_embed=companie&_embed=department&active=true'
    );

    if (!response.ok) {
      throw new Error('Could not fetch resource');
    }

    const data: User[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async (id: string): Promise<User> => {
  try {
    const response = await fetch(`http://localhost:3003/users/${id}/?_embed=companie&_embed=department&active=true`);

    if (!response.ok) {
      throw new Error('Could not fetch resource');
    }

    const data: User = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addUser = async (user: UserPostData): Promise<UserPostData> => {
  try {
    const response = await fetch('http://localhost:3003/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error('Could not fetch resource');
    }

    const data: User = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const editUser = async (user: UserPostData): Promise<UserPostData> => {
  try {
    const response = await fetch(`http://localhost:3003/users/${user.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error('Could not fetch resource');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (id: string): Promise<User> => {
  const response = await fetch(`http://localhost:3003/users/${id}`, {
    method: 'DELETE',
  });
  const data: User = await response.json();
  return data;
};

export const getDepartments = async (): Promise<Department[]> => {
  const response = await fetch('http://localhost:3003/departments')
  const data: Department[] = await response.json();
  return data;
};

export const getDepartment = async (id: string): Promise<Department> => {
  const response = await fetch(`http://localhost:3003/departments/${id}`)
  const data: Department = await response.json();
  return data;
};

export const getCompanies = async (): Promise<Companie[]> => {
  const response = await fetch('http://localhost:3003/companies')
  const data: Companie[] = await response.json();
  return data;
};

export const getCompanie = async (id: string): Promise<Companie> => {
  const response = await fetch(`http://localhost:3003/companies/${id}`)
  const data: Companie = await response.json();
  return data;
};