module.exports = {
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
  resolvers: {
    Query: {
      todos: (parent, args, { todos: { todosAll } }) => {
        return todosAll()
      },
    },
  },
  context: {
    todos: {
      todosAll: () => [
        { id: 1, description: "A", done: false, modifiedAt: Date.now() },
        { id: 2, description: "B", done: false, modifiedAt: Date.now() },
      ],
    },
  },
}
