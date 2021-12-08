const { User, UserSchema } = require('./user-model');
const { Customer, CustomerSchema} = require('./customer-model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));

  //Run associates 
  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
}

module.exports = setupModels;