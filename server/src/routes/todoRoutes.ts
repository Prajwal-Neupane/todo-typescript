import express from "express";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controllers/todoController";

const router = express.Router();

router.post("/add", addTodo);
router.delete("/:id", deleteTodo);
router.get("/all", getTodos);
router.put("/update/:id", updateTodo);

export default router;
