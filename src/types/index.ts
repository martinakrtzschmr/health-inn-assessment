export interface User {
  id: string;
  active: boolean;
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
  companie: Company;
  companieId: string;
}

export type UserPostData = Omit<User, 'companie' | 'department'>;

export interface Department {
  id: string;
  name: string;
}

export interface Company {
  id: string;
  name: string;
  cnpj: string;
}
