import { Task, TaskModel } from "src/model";

export const getAllTasks = () => TaskModel.findAll();

export const createTask = (taskFields: Omit<Task, "index">) =>
  TaskModel.insertTask(taskFields);

export const deleteTask = (toDeleteIndex: number) => {
  const task = TaskModel.findByIndex(toDeleteIndex);
  if (!task) throw new NotFoundError("task not found");
  TaskModel.deleteTask(toDeleteIndex);
  return task;
};

export const modifiyTask = (newTask: Task) => {
  if (!TaskModel.findByIndex(newTask.index))
    throw new NotFoundError("task not found");
  TaskModel.modifyTask(newTask);
  return newTask;
};

export const TaskService = {
  getAllTasks,
  createTask,
  deleteTask,
  modifiyTask,
};
