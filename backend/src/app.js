const express = require("express");
const cors = require("cors");
const env = require('dotenv').config();
const cookieParser = require("cookie-parser");

const webhookRoutes = require("./routes/webhookRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.use("/api/webhooks", webhookRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "RazorRecover backend is running ",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`RazorRecover backend running on port ${PORT}`);
});