const db = require("../models");
const ExpenseType = db.expensetypes;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const expense = {
    name: req.body.name,
    comment: req.body.comment,
  };

  // Save Tutorial in the database
  ExpenseType.create(expense)
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
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    ExpenseType.findAll({ where: condition })
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

// Find a single Expense Type with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    ExpenseType.findByPk(id)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message: "Error retrieving Expense Type with id=" + id
        });
        });
};
// Update a Expense Type by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    ExpenseType.update(req.body, {
        where: { id: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
            message: "Expense Type was updated successfully."
            });
        } else {
            res.send({
            message: `Cannot update Expense Type with id=${id}. Maybe Expense Type was not found or req.body is empty!`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Error updating Expense Type with id=" + id
        });
        });
};

// Delete a Expense Type with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  ExpenseType.destroy({
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