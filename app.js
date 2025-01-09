const express = require('express');
const bodyParser = require('body-parser');
const urlRoutes = require('./routes/urlRoutes');
const sequelize = require('./db/connection');

const app = express();

// Middleware
app.use(bodyParser.json());

// Use the routes
app.use('/', urlRoutes);

// Start the server
const startServer = async () => {
  try {
    await sequelize.authenticate(); // Verify DB connection
    await sequelize.sync(); // Sync models to create tables
    console.log('Database connected and synced!');
    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

startServer();
