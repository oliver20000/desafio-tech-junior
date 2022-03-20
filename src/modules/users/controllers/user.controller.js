const userService = require("../services/user.service");

module.exports = {
  async getAll(request, response) {
    try {
      const { page, limit } = request.query;

      const users = await userService.findAll({ page, limit });

      return response.json(users);
    } catch (error) {
      console.log("Error controller", error);
    }
  },
};
