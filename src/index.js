import { ApolloServer } from "@apollo/server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./domain/typeDefs.js";
import { resolvers } from "./domain/resolvers.js";
import { UserAPI } from "./domain/user/userAPI.js";
import { TodoAPI } from "./domain/todo/todoAPI.js";
import { applySensitivePIDataDirective } from "./customDirectives/applySensitivePIDataDirective.js";
import { ApolloServerPluginUsageReporting } from '@apollo/server/plugin/usageReporting';

let schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

schema = applySensitivePIDataDirective(schema, 'sensitivePIData');

const server = new ApolloServer({
  schema,
  introspection: true,
  // plugins: [
  //   // Sets a non-default option on the usage reporting plugin
  //   ApolloServerPluginUsageReporting({
  //     sendVariableValues: { all: true },
  //   }),
  // ],
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => {
    const { cache } = server;
    return {
      // We create new instances of our data sources with each request,
      // passing in our server's cache.
      dataSources: {
        userAPI: new UserAPI({ cache }),
        todoAPI: new TodoAPI({ cache }),
      },
      token: req.headers.authorization || "",
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
