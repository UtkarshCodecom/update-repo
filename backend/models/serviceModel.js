const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter Description"],
  },
  thumb: 
  {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  price: {
    type: Number,
    required: [true, "Please Enter pricing"],
  },
  depend: {
    type: String,
    required: [true, "Please Enter dependency"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Services", serviceSchema);
