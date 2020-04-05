module.exports = (sequelize, Sequelize) => {
    const ExpenseType = sequelize.define("expensetype", {
      name: {
        type: Sequelize.STRING
      },
      comment: {
        type: Sequelize.STRING
      }
    });
  
    return ExpenseType;
  };