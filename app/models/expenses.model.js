module.exports = (sequelize, Sequelize) => {
    const Expense = sequelize.define("expense", {
      expenseTypeId: {
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      comment: {
        type: Sequelize.STRING
      },

    });
  
    return Expense;
  };