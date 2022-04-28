import { Controller, controllerWrapper } from "src/core/controller";
const getAllTasksHandler: Controller = (req) => {};

const createTaskHandler: Controller = (req) => {};

const deleteTaskHandler: Controller = (req) => {};

const updateTaskHandler: Controller = (req) => {};

export class TaskController {
  static getAllTasks = controllerWrapper(getAllTasksHandler);
  static createTask = controllerWrapper(createTaskHandler);
  static deleteTask = controllerWrapper(deleteTaskHandler);
  static updateTask = controllerWrapper(updateTaskHandler);
}
