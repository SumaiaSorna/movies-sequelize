const { Model, DataTypes } = require("sequelize");
const connection = require("../config/connection");

const schema = {
  imdbId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  realiseYear: { type: DataTypes.STRING, allowNull: false },
  imageUrl: { type: DataTypes.STRING, allowNull: false },
};

const option = {
  sequelize: connection,
  timeStamp: true,
  underscored: false,
  modelName: "favourite",
};

class Favourite extends Model {}

Favourite.init(schema, option);

module.exports = Favourite;
