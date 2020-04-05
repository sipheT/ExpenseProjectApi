const db = require("../models");
const Expense = db.expenses;
const Op = db.Sequelize.Op;

// Create and Save a new Expense entry
exports.create = (req, res) => {
  // Validate request
  if (!req.body.expenseTypeId) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
  }

  // Create a An expense entry
  const expense = {
    expenseTypeId: req.body.expenseTypeId,
    value: req.body.value,
    date: req.body.date,
    comment: req.body.comment
  };

  // Save Expense in the database
  Expense.create(expense)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Expense Type."
      });
    });
};

// Retrieve all Expense Type from the database.
exports.findAll = (req, res) => {
    const expenseTypeId = req.query.expenseTypeId
    var condition = expenseTypeId ? { expenseTypeId: { [Op.like]: `%${expenseTypeId}%` } } : null;
  
    Expense.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

// Find a single Expense with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Expense.findByPk(id)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message: "Error retrieving Expense Type with id=" + id
        });
        });
};
// Update a Expense by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Expense.update(req.body, {
        where: { id: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
            message: "Expense entry was updated successfully."
            });
        } else {
            res.send({
            message: `Cannot update Expense entry with id=${id}. Maybe Expense entry was not found or req.body is empty!`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Error updating Expense entry with id=" + id
        });
        });
};

// Delete a Expense with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Expense.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Expense Type was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Expense Type with id=${id}. Maybe Expense Type was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Expense Type with id=" + id
      });
    });
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};