// models/listing.js

module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define('Listing', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Listing.belongsTo(models.User);
      }
    }
  });
  return Listing;
};