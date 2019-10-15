import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { calPrevious30Days } from './utils/calPrevious30Days'

const URL = `https://api.github.com/search/repositories?q=created:>${calPrevious30Days()}&sort=stars&order=desc&per_page=10`

function App() {
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      try {
        const response = await axios.get(URL)
        const repos = response.data && response.data.items
        if (repos) {
          setRepos(repos)
        } else {
          throw new Error('There is no repository data')
        }
      } catch (e) {
        setIsError(true)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Repo Ranking Page</h1>
      <p>
        GitHub's public repositories which are created in the past 30 days, ranked by the number of
        stars:
      </p>
      {repos.map(repo => {
        return (
          <div>
            <h2>{repo.name}</h2>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              Link
            </a>
          </div>
        )
      })}
      {isLoading && (
        <div>
          <strong>Loading . . .</strong>
        </div>
      )}
    </div>
  )
}

export default App
