import express from "express";

import TaskController from "../controller/task";

const router = express.Router();

router.get("/", TaskController.getAllTasks);
router.post("/", TaskController.createTask);
router.delete("/", TaskController.deleteTask);
router.patch("/:id", TaskController.updateTask);

export default router;
