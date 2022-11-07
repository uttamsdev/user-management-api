const fs = require("fs");
const writeUsers = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(__dirname + "/../users.json", stringifyData);
};

module.exports = writeUsers;
