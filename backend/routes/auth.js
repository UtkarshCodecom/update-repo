const express = require('express');
const router = express.Router();
const sendToken = require("../utils/jwttoken")
const User = require('../models/userModel'); 
const catchAsyncErrors = require("../Middleware/catchasyncerr")
const Task = require('../models/taskModel')
const Book = require('../models/bookmodel')




 router.post('/login',async (req, res, next) => {
  const { email, password } = req.body;

  // checking if user has given password and email both

  if (!email || !password) {
    return next(new ErrorHander("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }
  

  sendToken(user, 200, res);
});


// Registration route
router.post('/register', async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create a new user
    const newUser = new User({ name, email, password, phone });
    await newUser.save();

    // Generate JWT token for the newly registered user
    const token = newUser.getJWTToken();

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// logout 
router.post('/logout', async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
  

});


// all users 
router.get('/users', async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });

});

//find user by id 

router.get("/user/:id", async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHander(`User does not exist with Id: ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
    user,
  });
});

router.put( "/user/update/:id",async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message:"User Updated Successfully"
  });
});

// Delete User --Admin
router.delete("/user/delete/:id", async (req, res, next) => {
  try {
      const user = await User.findByIdAndDelete(req.params.id);

      if (!user) {
          return next(new ErrorHander(`User does not exist with Id: ${req.params.id}`, 400));
      }

      res.status(200).json({
          success: true,
          message: "User Deleted Successfully",
      });
  } catch (error) {
      next(error); // Pass any error to the error handler
  }
});
router.post('/tasks', async (req, res) => {
  try {
    const { title, description, status, userId , deadline } = req.body;
    // Create a new task
    const task = new Task({
      title,
      description,
      status,
      user: userId ,
      deadline: deadline,
      // Corrected line
    });
    // Save the task to the database
    await task.save();
    res.status(201).json({ message: 'Task created successfully' });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



router.get('/tasks/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        // Find tasks assigned to the user
        const tasks = await Task.find({ user: userId });

        // Check if tasks exist
        if (tasks.length > 0) {
            res.status(200).json({ success: true, tasks: tasks });
        } else {
            res.status(404).json({ success: false, message: 'No tasks found for the user' });
        }
    } catch (error) {
        console.error('Error finding tasks:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.post('/book', async (req, res) => {
  // Destructure the fields from the request body
  const { name, email, phone, service, reason } = req.body;

  // Create a new instance of the Book model
  const newUser = new Book({
    name,
    email,
    phone,
    service,
    reason
  });

  try {
    // Save the new user to the database
    await newUser.save();

    // Send a success response
    res.status(201).json({ message: 'Booking successful', user: newUser });
  } catch (error) {
    // Handle any errors that occur during save
    console.error(error);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
});


module.exports = router;



module.exports = router;
