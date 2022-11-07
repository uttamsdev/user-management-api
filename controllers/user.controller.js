const readUsers = require("../utlis/readUsers");

const allUsers = (req, res) => {
    const {limit} = req.query;
    const users = readUsers();
    res.send(users.slice(0,limit));
}

const getRandomUser = (req, res) => {
    const users = readUsers();
    const randomNumber = Math.floor(Math.random() * users.length);
    console.log("random number is: ",randomNumber);
    res.send(users[randomNumber]);
}

module.exports = {allUsers, getRandomUser};    