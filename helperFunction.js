const jobMatch = (usersArray, jobsArray) => {
  for (const user of usersArray) {
    // user { id: 1, name: 'Foo', tags: [ 'a', 'b' ] } // user 1 match with 1, 4
    for (const job of jobsArray) {
      const diffArray = job.tags.filter((tag) => user.tags.includes(tag));
      // console.log("job--->", job);
      // console.log("diffArray--->", diffArray);
      if (diffArray.length >= 2) {
        console.log(`User ${user.id} matched to ${JSON.stringify(job)}`);
      }
    }
  }
};

module.exports = jobMatch;
