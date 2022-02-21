# Job Matcher

Job Matcher is a command-line utility that matches user and jobs based on common tags - there must be at least 2 common tags.

Users are greeted with a prompt to enter user id(s). They can enter one, or many. If many, they must separate the ids with a space. The user can also enter 'all' and the user/job matches will be displayed.

Behind the scenes, Job Matcher is parsing the data of two JSON files - one for the user and one for the jobs.

## Final Product

![demo](https://github.com/StephhyL/lumiq-take-home-exercise/blob/main/docs/jobMatcherDemo.gif)

## Getting Started

1. Clone the repo
2. In the Command-Line, type `node index.js`
3. When prompted, enter the user id(s). If multiple ids, separate with a space (e.g. `1 3` for user 1 and 3). If all users, enter `all`.

## Dependencies

- Node
