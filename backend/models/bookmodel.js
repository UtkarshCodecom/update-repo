const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for the Book model
const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    match: [/^\d{10}$/, 'Please fill a valid phone number (e.g., 123-456-7890)']
  },
  service: {
    type: String,
   
    trim: true
  },
  reason: {
    type: String,
   
    trim: true
  }
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

// Create the Book model from the schema
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
