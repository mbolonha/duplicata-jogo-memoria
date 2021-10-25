module.exports = {
  uri: "http://localhost:8000/graphql",
  typeDefs: `
  type Query {
    todos: [Todo]
  }

  type Todo {
    id: ID!
    description: String
    done: Boolean
  }
  `,
}
