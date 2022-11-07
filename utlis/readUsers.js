const fs = require("fs");
const readUsers = () => {
  const users = fs.readFileSync(__dirname + '/../users.json');
  return JSON.parse(users);
};

module.exports = readUsers;
