import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import { calPrevious30Days } from './utils/calPrevious30Days'
import { parseLinkHeader } from './utils/parseLinkHeader'

const URL = `https://api.github.com/search/repositories?q=created:>${calPrevious30Days()}&sort=stars&order=desc&per_page=10`

function App() {
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [nextPageUrl, setNextPageUrl] = useState('')
  const [isLastPage, setIsLastPage] = useState(false)

  const fetchData = useCallback(url => {})

  // fetch data when component did mount
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      try {
        const response = await axios.get(URL)

        // find next page URL
        const linkHeader = response.headers.link
        const { next } = parseLinkHeader(linkHeader)
        if (next) {
          setNextPageUrl(next)
        } else {
          setIsLastPage(true)
        }

        // find all repo data
        const repos = response.data && response.data.items
        if (repos) {
          setRepos(prevRepos => [...prevRepos, ...repos])
        } else {
          throw new Error('There is no repository data')
        }
      } catch (e) {
        setIsError(true)
        console.error(e)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [])

  // implement infinite scroll
  useEffect(() => {
    function infiniteScroll() {
      if (window.scrollY) {
      }
    }

    window.addEventListener('scroll', infiniteScroll)
    return () => window.removeEventListener('scroll', infiniteScroll)
  }, [nextPageUrl])

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
