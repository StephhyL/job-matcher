const searchJobs = (targetTag, oneJobTagArray) => {
  let min = 0;
  let max = oneJobTagArray.tags.length - 1;

  console.log("targetTag---->", targetTag);
  console.log("oneJobTagArray--->", oneJobTagArray.tags);

  while (min <= max) {
    console.log("hello line 9");
    const middleIndex = Math.floor(min + max / 2);
    const currentItem = oneJobTagArray.tags[middleIndex];

    console.log("middleIndex--->", middleIndex);
    console.log("currentItem--->", currentItem);

    // targetTag = a
    // jobtagarray = [a, b, c, d, e, f, g]

    if (currentItem === targetTag) {
      console.log("correct item");
      return true;
    } else if (currentItem < targetTag) {
      min = middleIndex + 1;
      console.log("line 21 min--->", min);
    } else {
      max = middleIndex - 1;
      console.log("line 24 max--->", max);
      // console.log("middleIndex--->", middleIndex);
    }

    console.log("line 31");
    console.log("min--->", min);
    console.log("max---->", max);

    if (min > max) {
      return null;
    }
  }
};

const jobMatch = (usersArray, jobsArray) => {
  // console.log("hit this route");
  for (let i = 0; i < usersArray.length; i++) {
    let k = 0; // currentJobIndex
    while (k < jobsArray.length) {
      const currentUserId = i + 1;
      const currentUserTagArray = usersArray[i].tags;
      // console.log("currentUserTagArray--->", currentUserTagArray);

      let j = 0; // currentTagIndex

      let numOfMatches = 0;
      let numOfUserTagsLeft = currentUserTagArray.length;

      let resultMatch = [];

      while (numOfMatches + numOfUserTagsLeft >= 2 && numOfUserTagsLeft >= 0) {
        const currentTag = currentUserTagArray[j];
        // console.log("hello");
        // console.log("currentTag--->", currentTag);
        // console.log("jobsArray[k]--->", jobsArray[k]);
        console.log("is this true???", searchJobs(currentTag, jobsArray[k]));
        if (searchJobs(currentTag, jobsArray[k])) {
          console.log("hit line 43");
          resultMatch.push(
            `User ${currentUserId} is matched with ${JSON.stringify(
              jobsArray[k]
            )}`
          );
          numOfMatches += 1;
          console.log("57 numOfMatches--->", numOfMatches);
          numOfUserTagsLeft -= 1;
          // k++;
          console.log("resultMatch--->", resultMatch);
          // console.log("jobArray[k]-->", jobsArray[k]);
        }
        j++;
        console.log("63 numOfMatches, j--->", numOfMatches, j);
        numOfUserTagsLeft -= 1;
      }

      k++;

      if (resultMatch.length >= 2) {
        resultMatch.forEach((string) => console.log(string));
        console.log("bye");
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
