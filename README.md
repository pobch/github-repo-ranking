# Repo Ranking

## Website

https://repo-ranking.netlify.com/

## Step to start the website locally

1. Clone this repo
2. `yarn` to install all dependencies
3. At the root directory rename `.env.example` to `.env.local`
4. Replace 'your-github-access-token' in `.env.local` with your actual GitHub access token
5. `yarn start`
6. Go to http://localhost:3000/

## Run unit and integration tests

- `yarn test`

## Run e2e tests

**Note**: Your computer and your internet connection need to be fast enough to finish loading the website before the default timeout. However, you can adjust the timeout by yourself via `cypress.json`

- If you use Ubuntu OS, you may need to install these dependencies first `apt-get install xvfb libgtk-3-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2`
- `yarn test:e2e`

## Features

- List the most starred Github repositories that were created in the last 30 days.
- The list is one repository per row/card.
- Each card shows a repository name, description, total number of stars, total number of forks, the repository’s main programming language and the repository's link
- Display 10 repositories per page
- Infinite scrolling

## More Details

- The website is responsive by using `grid` layout. The breakpoint, which is used to separate the mobile and desktop layout, is **576px** screen width.
- Unit, integration and e2e tests included
