// Define the resolvers object
const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

export const userResolver = {
    Query: {
        books: () => books,
      },
    Mutation: {
        registerUser : (_, {username, password}, { dataSources }) => {
            return dataSources.userAPI.registerUser(username, password)
        },
        loginUser: async (_, {username, password}, { dataSources }) => {
            return dataSources.userAPI.loginUser(username, password)
        }
    }
}