import express from "express";
import handler from "./send-email.js";

const app = express();
app.use(express.json());

app.post("/api/send-email", (req, res) => {
  handler(req as any, res as any);
});

app.listen(3001, () => {
  console.log("API dev server running on http://localhost:3001");
});
