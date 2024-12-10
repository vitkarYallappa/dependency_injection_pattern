// diContainer.js
const UserRepository = require('../repositories/userRepository');
const UserService = require('../services/userService');
const UserController = require('../controllers/userController');

class DIContainer {
  constructor() {
    this.dependencies = new Map();
  }

  register(name, dependency) {
    this.dependencies.set(name, dependency);
  }

  get(name) {
    const dependency = this.dependencies.get(name);
    if (!dependency) {
      throw new Error(`Dependency '${name}' not found`);
    }
    return dependency;
  }
}

// Create instances and register them
const container = new DIContainer();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

container.register('userController', userController);

module.exports = container;
