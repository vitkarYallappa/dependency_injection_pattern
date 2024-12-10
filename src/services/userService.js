class UserService {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    async getUsers() {
      return this.userRepository.findAll();
    }
  
    async getUserById(id) {
      return this.userRepository.findById(id);
    }
  }
  
  module.exports = UserService;
  