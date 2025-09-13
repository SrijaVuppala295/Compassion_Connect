const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const connect = require("./config/db");
const authRoutes = require("./routes/auth");
const blogRoutes = require("./routes/blog"); // ✅ Import blog routes
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
connect();

// CORS connection
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true,
  })
);

// Root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Authorization Routes
app.use("/api/auth", authRoutes);

// ✅ Blog Routes
app.use("/api/blogs", blogRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
