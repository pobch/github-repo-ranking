import React from 'react'
import { useInfiniteScroll } from './hooks/useInfiniteScroll'

function App() {
  const { repos, isLoading, isError, isLastPage } = useInfiniteScroll()

  return (
    <div>
      <h1>Repo Ranking Page</h1>
      <p>
        GitHub's public repositories which are created in the past 30 days, ranked by the number of
        stars:
      </p>
      {repos.map(repo => {
        return (
          <div key={repo.id}>
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
