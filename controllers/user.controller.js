const readUsers = require("../utlis/readUsers");

const allUsers = (req, res) => {
    const users = readUsers();
    res.send(users);
}

module.exports = {allUsers};