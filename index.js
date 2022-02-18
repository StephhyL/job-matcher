/* Write a small command line utility that will parse 2 files (users.json and jobs.json, see attached), and for every user, find all jobs that match at least 2 tags.  The utility should then print out the matches as follows:

User 1 matched to {'id': 1, 'title': 'Foo developer', 'company': 'Bar industries', 'tags': ['a', 'b', 'c']}
User 1 matched to {'id': 4, 'title': 'Front-end developer', 'company': 'Bar industries', 'tags': ['a', 'b', 'f']}
User 2 matched to {'id': 6, 'title': 'Chief Technical Officer', 'company': 'Bar industries', 'tags': ['c', 'e', 'g']} */

// eventally "fetch" the data - let's do some Promises or something or require request
// type into the command line: node index.js jobs.json users.json ---> get the above list
// let's start by taking a look at what we have before fetching the data:

const jobs = [
  {
    id: 1,
    title: "Foo developer",
    company: "Bar industries",
    tags: ["a", "b", "c"],
  },
  {
    id: 2,
    title: "Full-stack developer",
    company: "Bar industries",
    tags: ["b", "c", "e"],
  },
  {
    id: 3,
    title: "Data scientist",
    company: "Bar industries",
    tags: ["d", "e", "g"],
  },
  {
    id: 4,
    title: "Front-end developer",
    company: "Bar industries",
    tags: ["a", "b", "f"],
  },
  {
    id: 5,
    title: "Devops Engineer",
    company: "Bar industries",
    tags: ["b", "e"],
  },
  {
    id: 6,
    title: "Chief Technical Officer",
    company: "Bar industries",
    tags: ["c", "e", "g"],
  },
  {
    id: 7,
    title: "Code Monkey",
    company: "Bar industries",
    tags: ["d", "g"],
  },
  {
    id: 8,
    title: "Intern",
    company: "Bar industries",
    tags: ["c", "d", "f"],
  },
];

const users = [
  {
    id: 1,
    name: "Foo",
    tags: ["a", "b"],
  },
  {
    id: 2,
    name: "Bar",
    tags: ["c", "g"],
  },
  {
    id: 3,
    name: "Hello",
    tags: ["d", "e", "f"],
  },
  {
    id: 4,
    name: "World",
    tags: ["a", "c", "d"],
  },
];

// jobs is an array of objects
// users is an array of objects

// inital thought is: loop over the users and for every user ---> loop through jobs to compare the user tags with the job tags. ---> if there are 2+ tags, get that job id and print it out (console.log it out?)

const userArray = [1];

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

//User 2 matched to {'id': 6, 'title': 'Chief Technical Officer', 'company': 'Bar industries', 'tags': ['c', 'e', 'g']}
