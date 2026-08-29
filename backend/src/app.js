const express = require("express");
const cors = require("cors");
const env = require('dotenv').config();

const webhookRoutes = require("./routes/webhookRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());
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