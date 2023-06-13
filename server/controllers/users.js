const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).send(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("User deleted");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};