const readUsers = require("../utlis/readUsers");
const writeUsers = require("../utlis/writeUsers");

const allUsers = (req, res) => {
  const { limit } = req.query;
  const users = readUsers();
  res.send(users.slice(0, limit));
};

const getRandomUser = (req, res) => {
  const users = readUsers();
  const randomNumber = Math.floor(Math.random() * users.length);
  console.log("random number is: ", randomNumber);
  res.send(users[randomNumber]);
};

const saveUser = (req, res) => {
  const newUser = req.body;
  const users = readUsers();
  users.push(newUser);
  writeUsers(users);
  res.send(users);
};
module.exports = { allUsers, getRandomUser, saveUser };
