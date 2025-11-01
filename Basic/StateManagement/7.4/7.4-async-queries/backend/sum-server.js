import express from "express";
import cors from "cors";

const app = express();
app.use(cors());


// Root route
app.get("/", (req, res) => {
  res.send("Sum Server is running 🚀");
});


// Notifications route
app.get("/notifications", (req, res) => {
  const notificationData = {
    network: Math.floor(Math.random() * 10),
    jobs: Math.floor(Math.random() * 10),
    messaging: Math.floor(Math.random() * 10),
    notifications: Math.floor(Math.random() * 10),
  };
  res.json(notificationData);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Sum Server running on http://localhost:${PORT}`);
});
