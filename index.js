const readline = require("readline");
const fs = require("fs");
const jobMatch = require("./helperFunction");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter user id(s): ", (userString) => {
  // checks if a user id was entered
  if (userString.length === 0) {
    console.log("Please enter at least one user id");
    return rl.close();
  }

  const userArray = userString.split(" ").map((num) => Number(num));

  const readFile = (name) => {
    return new Promise((resolve, reject) => {
      fs.readFile(name, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  };

  Promise.all([readFile("users.json"), readFile("jobs.json")]).then((data) => {
    // grab data from the files and parse them
    const users = JSON.parse(data[0]);
    const jobs = JSON.parse(data[1]);

    // grab the users where the userid is in the list of userArray
    const includedUsers = users.filter((user) => userArray.includes(user.id));
    /*includedUsers = [
      { id: 1, name: 'Foo', tags: [ 'a', 'b' ] },
      { id: 3, name: 'Hello', tags: [ 'd', 'e', 'f' ] }
    ]
    */

    if (includedUsers.length === 0) {
      console.log("Sorry, all user ids entered not associated with any user");
      return rl.close();
    }

    // if there are user entries
    console.log("Here are the matches:");

    jobMatch(includedUsers, jobs);
  });

  rl.close();

  //User 2 matched to {'id': 6, 'title': 'Chief Technical Officer', 'company': 'Bar industries', 'tags': ['c', 'e', 'g']}
});
