import mongoose from "mongoose";

export const Task = mongoose.model("Task", { name: String });
