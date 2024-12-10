class UserController {
    constructor(userService) {
      this.userService = userService;
    }
  
    async getAllUsers(req, res) {
      try {
        const users = await this.userService.getUsers();
        res.json(users);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async getUserById(req, res) {
      try {
        const user = await this.userService.getUserById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  }
  
  module.exports = UserController;
  