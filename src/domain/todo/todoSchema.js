// Defines the graphql schema for an Account
export const todoSchema = `

  # This "Todo" type defines the fields for a todo
  type Todo {
    id: Int!
    text: String!
    completed: Boolean
    editable: Boolean
    visible: Boolean
    deleted: Boolean
    time: DateTime!
    userid: Int!
    suggestion: String @sensitivePIData(type: "suggestion", useDemoData: true)
    tasks: [Task!]
  }

  type Task {
    id: Int!
    text: String!
    todoId: Int!
  }
  

  # The "Query" defines all queries that can be performed to retrieve todo
  type Query {
    todos: [Todo]
  }

  type Mutation {
    addTodo(content: String, time: String): ID
    deleteTodo(id: Int!): ID
  }
`;