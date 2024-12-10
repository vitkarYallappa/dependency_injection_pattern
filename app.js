// app.js
const express = require('express');
const container = require('./src/utils/diContainer');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

// Inject the controller into the routes
const userController = container.get('userController');
app.use('/users', userRoutes(userController));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
