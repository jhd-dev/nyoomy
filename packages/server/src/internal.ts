import 'reflect-metadata';
import { Container as typediContainer } from 'typeorm-typedi-extensions';
import { UserRepo } from './repositories/UserRepo';
// import { UserResolver } from './resolvers/UserResolver';
import { UserService } from './services/UserService';

// typediContainer.set(UserRepo, UserRepo);
// typediContainer.set<UserService>(UserService, new UserService());

console.log('user');
export * from './entities/User';
export * from './repositories/UserRepo';
console.log('userService');
export * from './services/UserService';
// console.log('userResolver');
// export * from './resolvers/UserResolver';
console.log('container');
export const Container = typediContainer;
