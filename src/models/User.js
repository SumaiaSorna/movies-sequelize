const { Model, DataTypes } = require("sequelize");
const connection = require("../config/connection");

const schema = {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 20],
    },
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const option = {
  sequelize: connection,
  timeStamp: true,
  underscored: false,
  modelName: "user",
};

class User extends Model {}

User.init(schema, option);

module.exports = User;
