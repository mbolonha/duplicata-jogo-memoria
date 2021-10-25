import todosAll from "../context"
export default {
  Query: {
    todos: (parent, args, { todos: { todosAll } }) => {
      return todosAll()
    },
  },
}
