const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const router = require("./routes");
const db = require('./config/connection');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", router);

// Database connection
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
  
  // Start the server after successful database connection
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});