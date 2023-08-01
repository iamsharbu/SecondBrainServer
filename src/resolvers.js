import { Task } from "./models/Task";

export const resolvers = {
  Query: {
    tasks: () => Task.find()
  },
  Mutation: {
    createTask: async (_, { name }) => {
      const task = new Task({ name });
      await task.save();
      return task;
    }
  }
};
