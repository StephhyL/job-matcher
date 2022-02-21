const fs = require("fs");

/** gets the information from the specified file being passed into the function. If no problems reading the data, will resolve. Otherwise, reject */
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

/** prints out user/job matches if there are at least 2 common tags. Note: the parameters are both arrays of objects in which one key/value pair is 'tags'/[array of tag elements] */
const jobMatch = (usersArray, jobsArray) => {
  // for every user, loop through all the jobs
  for (const user of usersArray) {
    for (const job of jobsArray) {
      // filters the job tags array for job tags that are included in the user tags
      const matchArray = job.tags.filter((tag) => user.tags.includes(tag));

      // checks if there is at least tags in common between user and job. If so, print the match in the console.
      if (matchArray.length >= 2) {
        console.log(`User ${user.id} matched to ${JSON.stringify(job)}`);
      }
    }
  }
};

module.exports = { readFile, jobMatch };
