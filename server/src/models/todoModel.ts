import mongoose, { InferSchemaType, model } from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    text: String,
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

type ToDo = InferSchemaType<typeof todoSchema>;

export default model("ToDo", todoSchema);
