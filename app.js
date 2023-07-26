const express = require("express");

const app = express();

const dbConnect = require("./db/dbConnect");

const User = require("./db/userModel");

dbConnect();

const newUser = new User({
  email: "xyz@example2.com",
  password: "12345678",
});
 //inserting new user
newUser
  .save()
  .then(() => {
    console.log("User Inserted Successfully");
  })
  .catch((error) => {
    console.log("Error inserting user:", error);
  });
  
  //search about specific user
User.find({ email: "xyz@example2.com" })
  .then((users) => {
    console.log("Users found:", users);
  })
  .catch((error) => {
    console.error("Error finding users", error);
  });

module.exports = app;
