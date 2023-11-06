import { RequestHandler } from "express";
import todoModel from "../models/todoModel";

export const addTodo: RequestHandler = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      res.json({ message: "Text is required" });
      return;
    }
    const response = await todoModel.create({ text });
    res.json(response);
  } catch (error) {
    res.json({ message: "Error while adding todo" });
  }
};

export const getTodos: RequestHandler = async (req, res) => {
  try {
    const response = await todoModel.find({});
    res.json(response);
  } catch (error) {
    res.json({ message: "Error while getting todos" });
  }
};

export const getSingleTodo: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await todoModel.findById(id);
    res.json(response);
  } catch (error) {
    res.json({ message: "Error while getting todo" });
  }
};

export const updateTodo: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    const response = await todoModel.findByIdAndUpdate(id, { text });

    res.json(response);
  } catch (error) {
    res.json({ message: "Error while updating todo" });
  }
};

export const deleteTodo: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await todoModel.findByIdAndDelete(id);
    // if (response) {
    //   res.json({ message: "Todo deleted successfully" });
    // } else {
    //   res.json({ message: "Todo not found" });
    // }
    res.json(response);
  } catch (error) {
    res.json({ message: "Error while deleting todo", error });
  }
};
