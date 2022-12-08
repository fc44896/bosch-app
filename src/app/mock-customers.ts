import { Customer } from './customer';

export const CUSTOMERS: Customer[] = [
  {
    id: 1,
    firstName: 'Tiago',
    lastName: 'Marques',
    birthDate: new Date(1995, 1, 6, 0, 0, 0, 0),
    email: 'tiagomtmarques@gmail.com',
    avatar: 'http://loremflickr.com/640/480/animals',
    hasContract: true,
  },
  {
    id: 2,
    firstName: 'Miguel',
    lastName: 'Fernandes',
    birthDate: new Date(1975, 5, 22, 0, 0, 0, 0),
    email: 'mfernandes@gmail.com',
    avatar: 'http://loremflickr.com/640/480/animals',
    hasContract: true,
  },
  {
    id: 3,
    firstName: 'Antonio',
    lastName: 'Ribeiro',
    birthDate: new Date(1987, 9, 18, 0, 0, 0, 0),
    email: 'aribeiro@gmail.com',
    avatar: 'http://loremflickr.com/640/480/animals',
    hasContract: true,
  },
  {
    id: 4,
    firstName: 'Joao',
    lastName: 'Silva',
    birthDate: new Date(1977, 1, 5, 0, 0, 0, 0),
    email: 'jsilva@gmail.com',
    avatar: 'http://loremflickr.com/640/480/animals',
    hasContract: true,
  },
  {
    id: 5,
    firstName: 'Pedro',
    lastName: 'Atunes',
    birthDate: new Date(1991, 3, 7, 0, 0, 0, 0),
    email: 'pantunes@gmail.com',
    avatar: 'http://loremflickr.com/640/480/animals',
    hasContract: true,
  }
];
