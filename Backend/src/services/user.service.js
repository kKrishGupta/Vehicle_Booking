const userModel = require("../models/user.models");

const createUser = async ({ firstName, lastName, email, password }) => {
    if (!firstName || !lastName || !email || !password) {
        throw new Error("All fields are required");
    }

   const user = await userModel.create({
      fullname: {
          firstname: firstName,
          lastname: lastName
      },
      email,
      password
  });

    return user;
};

module.exports = {
    createUser
};