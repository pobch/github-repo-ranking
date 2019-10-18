# Repo Ranking

## Website

https://repo-ranking.netlify.com/

## Step to start the website locally

1. Clone this repo
2. `yarn` to install all dependencies
3. At the root directory rename `.env.example` to `.env.local`
4. Replace 'your-github-access-token' in `.env.local` with your actual GitHub access token
5. `yarn start`

## Note

- breakpoint : 576px
- https://api.github.com/search/repositories?q=created:>2019-10-13T00:00:01Z&sort=stars&order=desc&per_page=5&page=2
- cypress dependencies for ubuntu `apt-get install xvfb libgtk-3-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2`
- add readme to list all commands
- deploy to netlify and change baseURL of e2e test
