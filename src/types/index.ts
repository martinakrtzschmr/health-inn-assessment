export interface User {
  id: string;
  active: string | boolean;
  name: string;
  cpf: number | null;
  rg: number | null;
  birthday: string;
  email: string;
  phone: number;
  address: string;
  role: string;
  department: Department;
  departmentId: string;
  companie: Companie;
  companieId: string;
}

export type UserPostData = Omit<User, 'companie' | 'department'>;

export interface Department {
  id: string;
  name: string;
}

export interface Companie {
  id: string;
  name: string;
  cnpj: string;
}
