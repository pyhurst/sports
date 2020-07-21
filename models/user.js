module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      points: {
        type: DataTypes.INT,
        defaultValue: 1000
      }
    });
    return User;
  };