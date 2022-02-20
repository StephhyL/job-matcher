const searchJobs = (targetTag, oneJobTagArray) => {
  let min = 0;
  let max = oneJobTagArray.length - 1;

  while (true) {
    const middleIndex = Math.floor((min + max) / 2);
    const currentItem = oneJobTagArray[middleIndex];

    if (currentItem === targetTag) {
      console.log("correct item");
      return true;
    } else if (currentItem < targetTag) {
      min = middleIndex + 1;
    } else {
      max = middleIndex - 1;
    }

    if (min > max) {
      return null;
    }
  }
};

const jobMatch = (usersArray, jobsArray) => {
  let j = 0; // currentTagIndex
  let k = 0; // currentJobIndex

  for (let i = 0; i < usersArray; i++) {
    const currentUserId = i + 1;
    const currentUserTagArray = usersArray[i].tags;
    let numOfMatches = 0;
    let numOfUserTagsLeft = currentUserTagArray.length;
    const currentTag = currentUserTagArray[j];

    let resultMatch = [];

    while (numOfMatches + numOfUserTagsLeft >= 2) {
      if (searchJobs(currentTag, jobsArray[k])) {
        resultMatch.push(
          `User ${currentUserId} is matched with ${jobsArray[k]}`
        );
        numOfTags += 1;
        numOfUserTagsLeft -= 1;
      }
    }
  }

  // for (const user of usersArray) {
  //   // user { id: 1, name: 'Foo', tags: [ 'a', 'b' ] } // user 1 match with 1, 4
  //   // let numOfMatches = 0;
  //   // let numOfUserTagsLeft = user.tags.length;

  //   let i = 0;
  //   let j = 0;
  //   while (numOfMatches + numOfUserTagsLeft >= 2) {
  //     if (searchJobs(tag, jobsArray)) {
  //       numOfTags += 1;
  //     }
  //   }
  // }
};

module.exports = jobMatch;
