import { Task } from "./models/Task";

const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

export const resolvers = {
  Query: {
    tasks: () => Task.find()
  },
  Mutation: {
    createTask: async (_, { name }) => {
      const task = new Task({ name });
      await task.save();
      return task;
    },
    deleteTask: async (_, { id }) => {
      const task = await Task.findByIdAndDelete({_id: new ObjectId(id)});
      return task;
    }
  }
};
