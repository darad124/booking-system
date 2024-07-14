require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/dbConfig');
const logger = require('./config/logger');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./middleware/errorHandler');
const swaggerConfig = require('./config/swaggerConfig');

const app = express();

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());

// Swagger documentation
swaggerConfig(app);

// Routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

// Async function to start the server
const startServer = async () => {
  try {
    // Connect to database
    await connectDB();
    
    // Start the server
    app.listen(PORT, () => logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
  } catch (error) {
    logger.error(`Failed to start server: ${error.message}`);
    process.exit(1);
  }
};

// Call the async function to start the server
startServer();

module.exports = app;