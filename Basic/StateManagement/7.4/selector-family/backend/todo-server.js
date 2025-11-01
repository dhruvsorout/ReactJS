import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// Dummy todos data
const todos = [
  {
    id: 1,
    title: "Todo 1",
    description: "This is todo 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    description: "This is todo 2",
    completed: false,
  },
  {
    id: 3,
    title: "Todo 3",
    description: "This is todo 3",
    completed: true,
  },
  {
    id: 4,
    title: "Todo 4",
    description: "This is todo 4",
    completed: false,
  },
  {
    id: 5,
    title: "Todo 5",
    description: "This is todo 5",
    completed: true,
  },
  {
    id: 6,
    title: "Todo 6",
    description: "This is todo 6",
    completed: false,
  },
];

// Route: GET /todo?id=2
app.get("/todo", (req, res) => {
  const id = parseInt(req.query.id);
  const todo = todos.find(t => t.id === id);
  if (todo) {
    res.json({ todo });
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

// Route: GET /todos (returns all todos)
app.get("/todos", (req, res) => {
  res.json({ todos });
});

// Start server
app.listen(3000, () => {
  console.log("✅ Todo server running at http://localhost:3000");
});
