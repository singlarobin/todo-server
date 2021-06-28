const express = require("express");
const taskRouter = express.Router();

const {
  getToDoList,
  getOneTask,
  createNewTask,
  updateTask,
  deleteTask,
  invalidUrl,
} = require("../controller/taskController");

taskRouter.get("/", getToDoList);

taskRouter.get("/:id", getOneTask);

taskRouter.post("/", createNewTask);

taskRouter.put("/:id", updateTask);

taskRouter.delete("/:id", deleteTask);
taskRouter.use("/*", invalidUrl);

module.exports = taskRouter;
