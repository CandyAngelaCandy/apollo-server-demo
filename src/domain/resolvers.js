import { mergeResolvers } from '@graphql-tools/merge';
import { userResolver } from './user/userResolver.js';
import { todoResolver } from './todo/todoResolver.js';
import { customTypesResolvers } from '../customTypes/customTypesResolvers.js';


export const resolvers = mergeResolvers([
    userResolver,
    todoResolver,
    customTypesResolvers
]);