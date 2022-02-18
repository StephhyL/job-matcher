const readline = require("readline");
const fs = require("fs");

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

  // if there are user entries
  console.log("Here are the matches for the users:");

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
    // console.log("users-->", users);
    // console.log("jobs--->", jobs);

    // grab the users where the userid is in the list of userArray
    const includedUsers = users.filter((user) => userArray.includes(user.id));
    /*includedUsers = [
      { id: 1, name: 'Foo', tags: [ 'a', 'b' ] },
      { id: 3, name: 'Hello', tags: [ 'd', 'e', 'f' ] }
    ]
    */

    for (const user of includedUsers) {
      // user { id: 1, name: 'Foo', tags: [ 'a', 'b' ] } // user 1 match with 1, 4
      for (const job of jobs) {
        const diffArray = job.tags.filter((tag) => user.tags.includes(tag));
        // console.log("job--->", job);
        // console.log("diffArray--->", diffArray);
        if (diffArray.length >= 2) {
          console.log(`User ${user.id} matched to ${JSON.stringify(job)}`);
        }
      }
    }
  });

  rl.close();

  //User 2 matched to {'id': 6, 'title': 'Chief Technical Officer', 'company': 'Bar industries', 'tags': ['c', 'e', 'g']}
});
