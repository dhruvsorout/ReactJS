const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

function getRandomTodos() {
    const todoPairs = [
        { title: "Go to gym", description: "Complete your workout and stretch properly" },
        { title: "Buy groceries", description: "Get vegetables, fruits, and essentials" },
        { title: "Finish homework", description: "Complete all pending assignments" },
        { title: "Walk the dog", description: "Take the dog for a 30-minute walk" },
        { title: "Read a book", description: "Read at least 20 pages today" },
        { title: "Clean your room", description: "Organize your desk and wardrobe" },
        { title: "Call your parents", description: "Talk to them for at least 15 minutes" },
        { title: "Pay electricity bill", description: "Submit payment before due date" },
        { title: "Water the plants", description: "Ensure every plant is watered properly" },
        { title: "Work on project", description: "Finish one major task for your project" }
    ];

    const todos = [];
    const count = Math.floor(Math.random() * todoPairs.length) + 1; // 1–10 todos
    const shuffled = todoPairs.sort(() => 0.5 - Math.random());

    for (let i = 0; i < count; i++) {
        todos.push({
            id: i + 1,
            title: shuffled[i].title,
            description: shuffled[i].description,
            completed: Math.random() > 0.5
        });
    }

    return todos;
}

// GET /todos → returns random todos
app.get("/todos", (req, res) => {
    res.json({ todos: getRandomTodos() });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
