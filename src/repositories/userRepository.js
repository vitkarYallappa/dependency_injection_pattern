class UserRepository {
    async findAll() {
      // Mock database interaction
      return [{ id: 1, name: "Suresh" }, { id: 2, name: "Ramesh" }];
    }
  
    async findById(id) {
      return { id, name: `User ${id}` };
    }
  }
  
  module.exports = UserRepository;
  