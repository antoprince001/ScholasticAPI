const books = require("../controllers/book.controller");  
const express = require("express");
const router = express.Router();
  
// Create a new Book
router.post("/", books.create);
  
// Retrieve all Books
router.get("/", books.findAll);
  
// Retrieve all Books of author
router.get("/author", books.findByAuthor);
  
// Retrieve a single Book with id
router.get("/:id", books.findOne);
  
// Update a Book with id
router.put("/:id", books.update);
  
// Delete a Book with id
router.delete("/:id", books.delete);
  
// Delete all Book
router.delete("/", books.deleteAll);

module.exports = router;
  
  