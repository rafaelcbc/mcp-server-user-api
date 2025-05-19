import { User, CreateUserDTO, UpdateUserDTO } from '../types/user';

class UserService {
  private users: User[] = [];
  private nextId = 1;

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findById(id: number): Promise<User | null> {
    return this.users.find(user => user.id === id) || null;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email.toLowerCase() === email.toLowerCase()) || null;
  }

  async create(userData: CreateUserDTO): Promise<User> {
    const existingUser = await this.findByEmail(userData.email);
    if (existingUser) {
      throw new Error('Email já está em uso');
    }

    const newUser: User = {
      id: this.nextId++,
      ...userData
    };
    this.users.push(newUser);
    return newUser;
  }

  async update(id: number, userData: UpdateUserDTO): Promise<User | null> {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return null;

    if (userData.email) {
      const existingUser = await this.findByEmail(userData.email);
      if (existingUser && existingUser.id !== id) {
        throw new Error('Email já está em uso');
      }
    }

    this.users[index] = {
      ...this.users[index],
      ...userData
    };

    return this.users[index];
  }

  async delete(id: number): Promise<boolean> {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }
}

export const userService = new UserService(); 