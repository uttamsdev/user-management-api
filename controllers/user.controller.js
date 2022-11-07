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
  //console.log("delte id is: ",id);
  const users = readUsers();
  //console.log(users);
  const newUser = users.filter(user => user.id !== parseInt(id));
  //console.log(newUser);
  writeUsers(newUser);
  res.send(newUser);
}

const updateUser = (req, res) => {
  let updatedUsers = [];
  let users = readUsers();
  const id = req.params.id;
  let newUser = req.body;
  let updated = users.find(user => user.id === parseInt(id));
  updated.id = parseInt(id);
  updated.gender = newUser.gender;
  updated.name = newUser.name;
  updated.contact = newUser.contact;
  updated.address = newUser.address;
  updated.photoURL = newUser.photoURL;

  if(updated){
    //users.push(updated);
    writeUsers(users);
  }
  //console.log(updated);

  res.send(users);
}
module.exports = { allUsers, getRandomUser, saveUser, deleteUser, updateUser};
