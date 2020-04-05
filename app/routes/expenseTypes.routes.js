module.exports = app => {
    const expenseTypes = require("../controllers/expensetypes.controllers.js");
  
    var router = require("express").Router();
  
    // Create a new Expense Type
    router.post("/", expenseTypes.create);
  
    // Retrieve all Expense Type
    router.get("/", expenseTypes.findAll);
  
    // Retrieve a single Expense Type with id
    router.get("/:id", expenseTypes.findOne);
  
    // Update a Expense Type with id
    router.put("/:id", expenseTypes.update);
  
    // Delete a Expense Type with id
    router.delete("/:id", expenseTypes.delete);
  
    app.use('/api/expensetypes', router);
  };