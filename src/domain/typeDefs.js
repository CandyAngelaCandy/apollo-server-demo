import { mergeTypeDefs } from '@graphql-tools/merge';
import { userSchema } from './user/userSchema.js';
import { todoSchema } from './todo/todoSchema.js';
import { customTypesSchema } from '../customTypes/customTypesSchema.js'
import { customDirectivesSchema } from '../customDirectives/customDirectiveSchema.js';

export const typeDefs = mergeTypeDefs([
    userSchema,
    todoSchema,
    customTypesSchema,
    customDirectivesSchema
]);