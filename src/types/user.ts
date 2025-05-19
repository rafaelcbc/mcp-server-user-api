export interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

export type CreateUserDTO = Omit<User, 'id'>;
export type UpdateUserDTO = Partial<CreateUserDTO>; 