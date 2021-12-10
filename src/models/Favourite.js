const { Model } = require("sequelize");

const schema = {};

const option = {};

class Favourite extends Model {}

Favourite.init(schema, option);

module.exports = Favourite;
