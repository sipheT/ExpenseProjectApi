module.exports = app => {
    const expenses = require("../controllers/expenses.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Expense Type
    router.post("/", expenses.create);
  
    // Retrieve all Expense Type
    router.get("/", expenses.findAll);
  
    // Retrieve a single Expense Type with id
    router.get("/:id", expenses.findOne);
  
    // Update a Expense Type with id
    router.put("/:id", expenses.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", expenses.delete);
  
    // Create a new Tutorial
    router.delete("/", expenses.deleteAll);
  
    app.use('/api/expenses', router);
  };