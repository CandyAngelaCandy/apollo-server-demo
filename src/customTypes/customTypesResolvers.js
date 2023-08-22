import { GraphQLScalarType, Kind } from 'graphql'
import moment from 'moment'

const validateDateValue = (value) => {
    if (!moment(new Date(value)).isValid()) {
      throw new GraphQLError('Query error: not a valid date', [value]);
    }
};

export const customTypesResolvers = {
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'DateTime type',
        parseValue(value) {
          // value comes from the client, in variables
          validateDateValue(value);
          return moment(value).utcOffset(0); // sent to resolvers
        },
        parseLiteral(ast) {
          // value comes from the client, inlined in the query
          if (ast.kind !== Kind.STRING) {
            throw new GraphQLError(
              `Query error: Can only parse dates strings, got a: ${ast.kind}`,
              [ast]
            );
          }
          validateDateValue(ast.value);
          return moment(ast.value).utcOffset(0); // sent to resolvers
        },
        serialize(value) {
          // value comes from resolvers
          return moment(new Date(value)).utcOffset(0).toISOString(true); // sent to the client
        },
      })
}