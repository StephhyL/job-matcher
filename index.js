const readline = require("readline");
const { readFile, jobMatch } = require("./helperFunction");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Please enter user id(s) -please separate ids with a space- or 'all' for all users: ",
  (userString) => {
    // checks if a user id was entered
    if (userString.length === 0) {
      console.log("Please enter at least one user id");
      return rl.close();
    }

    // converts the user entry into an array format. If id(s) entered, convert the elements values of the array into numbers
    const userArray =
      userString === "all"
        ? ["all"]
        : userString.split(" ").map((num) => Number(num));

    Promise.all([readFile("users.json"), readFile("jobs.json")])
      .then((data) => {
        // wait for all the file data to gathered and parse them into JSON objects
        const users = JSON.parse(data[0]);
        const jobs = JSON.parse(data[1]);

        // if specific user ids entered, grab the users where the user id is in the list of userArray
        const includedUsers =
          userArray[0] === "all"
            ? users
            : users.filter((user) => userArray.includes(user.id));

        // sends message if all user ids entered not in the user data file
        if (includedUsers.length === 0) {
          console.log(
            "Sorry, all user ids entered not associated with any user"
          );
          return rl.close();
        }

        // if there are user id or 'all' entered, display the matches by calling the jobMatch function
        console.log("Here are the matches:");

        jobMatch(includedUsers, jobs);
      })
      .catch((err) => console.log("Error has occurred:", err.message));

    rl.close();
  }
);
