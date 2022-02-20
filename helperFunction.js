const searchJobs = (targetTag, oneJobTagArray) => {
  let min = 0;
  let max = oneJobTagArray.length - 1;

  // console.log("targetTag---->", targetTag);
  // console.log("oneJobTagArray--->", oneJobTagArray);

  while (min < max) {
    const middleIndex = Math.floor(oneJobTagArray.tags.length / 2);
    const currentItem = oneJobTagArray.tags[middleIndex];

    console.log("middleIndex--->", middleIndex);
    console.log("currentItem--->", currentItem);

    if (currentItem === targetTag) {
      console.log("correct item");
      return middleIndex;
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
  // console.log("hit this route");
  for (let i = 0; i < usersArray.length; i++) {
    const currentUserId = i + 1;
    const currentUserTagArray = usersArray[i].tags;
    // console.log("currentUserTagArray--->", currentUserTagArray);

    let j = 0; // currentTagIndex
    let k = 0; // currentJobIndex

    let numOfMatches = 0;
    let numOfUserTagsLeft = currentUserTagArray.length;

    const currentTag = currentUserTagArray[j];

    let resultMatch = [];

    while (numOfMatches + numOfUserTagsLeft >= 2 && numOfUserTagsLeft > 0) {
      // console.log("hello");
      // console.log("currentTag--->", currentTag);
      // console.log("jobsArray[k]--->", jobsArray[k]);
      if (searchJobs(currentTag, jobsArray[k])) {
        // console.log("hit line 43");
        resultMatch.push(
          `User ${currentUserId} is matched with ${jobsArray[k]}`
        );
        numOfMatches += 1;
        console.log("57 numOfMatches--->", numOfMatches);
        numOfUserTagsLeft -= 1;
        k++;
      }
      j++;
      numOfMatches += 1;
      console.log("63 numOfMatches--->", numOfMatches);
      numOfUserTagsLeft -= 1;
    }

    if (resultMatch.length >= 2) {
      resultMatch.forEach((string) => console.log(string));
      console.log("hello");
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
