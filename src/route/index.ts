import express from "express";

import TaskRouter from "./task";

const router = express.Router();
router.use("/task", TaskRouter);

export default router;
