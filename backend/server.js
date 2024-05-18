const express = require('express');
const connectToMongoDB = require('./db');
const authRoutes = require('./routes/auth');
const protectedRoute = require('./routes/protectedroutes');
const cors = require('cors'); // Import the cors middleware
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Connect to MongoDB
connectToMongoDB()
  .then(() => {
    // Define routes
    app.use('/api/auth', authRoutes);
    app.use('/api', protectedRoute);

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with error code 1
  });
