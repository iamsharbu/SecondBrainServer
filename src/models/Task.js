import mongoose from 'mongoose';

const Task = mongoose.model('Task', { name: String });
export default Task;
