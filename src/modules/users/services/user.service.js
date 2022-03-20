const axios = require("axios").default;
require("dotenv").config();

// const AppError = require("../../../errors/AppError");

const userDt = require("../dt/user.dt");

const apiURL = process.env.MOCK_URL;

module.exports = {
  async findAll({ page = 1, limit = 5 }) {
    const { data: users } = await axios.get(`${apiURL}/users`, {
      params: { page, limit },
    });

    const userListFilled = [];
    await users.reduce(async (_, user) => {
      try {
        const { data: addresses } = await axios.get(
          `${apiURL}/users/${user.id}/address`
        );

        // const { data: userContacts } = await axios.get(
        //   `${apiURL}/users/${user.id}/contact`
        //   // {
        //   //   validateStatus: function (status) {
        //   //     return status < 500;
        //   //   },
        //   // }
        // );

        const transformedUser = userDt(user, addresses);

        userListFilled.push(transformedUser);
      } catch (error) {
        console.log(error);
      }
    }, []);

    return userListFilled;
  },
};
