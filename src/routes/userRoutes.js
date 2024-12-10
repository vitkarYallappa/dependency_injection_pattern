// routes/userRoutes.js
const express = require('express');

module.exports = (userController) => {
  const router = express.Router();

  router.get('/', (req, res) => userController.getAllUsers(req, res));
  router.get('/:id', (req, res) => userController.getUserById(req, res));

  return router;
};
