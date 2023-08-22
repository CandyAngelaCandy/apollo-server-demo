// Define the resolvers object
export const todoResolver = {
    Query: {
        todos: (_, __, { dataSources, token }) => {
            return dataSources.todoAPI.getTodos(token)
        },
    },
    Mutation: {
        addTodo: (_, {content, time}, { dataSources, token }) => {
            return dataSources.todoAPI.addTodo(token, content, time)
        },
        deleteTodo: (_, {id}, { dataSources, token }) => {
            return dataSources.todoAPI.deleteTodo(token, id)
        },
    }
}