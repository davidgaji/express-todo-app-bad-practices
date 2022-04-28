import { StatusCodes } from "http-status-codes";
import { NotFoundError, ServerError } from "src/core/errors";
import { Controller, controllerWrapper } from "../core/controller";
import TaskService from "../service/task";

const getAllTasks: Controller = (req) => ({
  code: StatusCodes.OK,
  value: TaskService.getAllTasks(),
});

const throwIfNotFound =
  (controller: Controller): Controller =>
  (req) => {
    try {
      return controller(req);
    } catch (error) {
      if (error instanceof NotFoundError)
        throw new ServerError(StatusCodes.NOT_FOUND, error.message);
      throw error;
    }
  };

const createTask = throwIfNotFound((req) => ({
  code: StatusCodes.CREATED,
  value: TaskService.createTask(req.body),
}));

const deleteTask: Controller = throwIfNotFound((req) => ({
  code: StatusCodes.OK,
  value: TaskService.deleteTask(Number(req.params.id)),
}));

const updateTask: Controller = throwIfNotFound((req) => ({
  code: StatusCodes.OK,
  value: TaskService.modifiyTask(req.body),
}));

export default {
  getAllTasks: controllerWrapper(getAllTasks),
  createTask: controllerWrapper(createTask),
  deleteTask: controllerWrapper(deleteTask),
  updateTask: controllerWrapper(updateTask),
};
