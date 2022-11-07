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

const deleteUser = (req, res) => {
  const id = req.params.id;
  console.log("delte id is: ",id);
  const users = readUsers();
  //console.log(users);
  const newUser = users.filter(user => user.id !== parseInt(id));
  //console.log(newUser);
  writeUsers(newUser);
  res.send(newUser);
}
module.exports = { allUsers, getRandomUser, saveUser, deleteUser};
