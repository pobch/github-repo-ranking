import { useEffect, useState, useRef, useCallback } from 'react'
import axios from 'axios'
import _ from 'lodash'
import { parseLinkHeader } from '../utils/parseLinkHeader'
import { generateInitURL } from '../utils/generateInitURL'

export function useInfiniteScroll() {
  // state which will be a returned value of this hook
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isLastPage, setIsLastPage] = useState(false)

  // state used only inside this hook
  const [nextPageUrl, setNextPageUrl] = useState('')

  // Synchronously update the Loading state to prevent redundant fetch
  //  that can be happened when an user scrolls really fast
  //  and the scroll event is triggered multiple times in a row
  const isFetchingInfiniteScroll = useRef(false)

  // fetching data logic
  const fetchData = useCallback(async url => {
    setIsLoading(true)
    isFetchingInfiniteScroll.current = true
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_AUTH}`
        }
      })

      // find next page URL
      const linkHeader = response.headers.link
      const { next } = parseLinkHeader(linkHeader)
      if (next) {
        setNextPageUrl(next)
      } else {
        setIsLastPage(true)
        setNextPageUrl('')
      }

      // find all repo data
      const repos = response.data && response.data.items
      if (repos) {
        setRepos(prevRepos => [...prevRepos, ...repos])
        setIsError(false)
      } else {
        throw new Error('There is no repository data')
      }
    } catch (e) {
      setIsError(true)
    }
    setIsLoading(false)
    isFetchingInfiniteScroll.current = false
  }, [])

  // start fetching the first page
  useEffect(() => {
    fetchData(generateInitURL(new Date()))
  }, [fetchData])

  // implement infinite scroll for fetching the next page while reaching the bottom of the page
  useEffect(() => {
    function infiniteScroll() {
      // Height of the whole document regardless of browser/device
      const scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      )

      if (
        !isLastPage &&
        !isFetchingInfiniteScroll.current &&
        // start fetching on 150px above the end of the viewport
        document.documentElement.clientHeight + window.pageYOffset >= scrollHeight - 150
      ) {
        fetchData(nextPageUrl)
      }
    }

    // use debounce to improve the performance
    const debounceInfiniteScroll = _.debounce(infiniteScroll, 200)
    window.addEventListener('scroll', debounceInfiniteScroll)

    return () => window.removeEventListener('scroll', debounceInfiniteScroll)
  }, [fetchData, isLastPage, nextPageUrl])

  // the returned value of this hook
  return {
    repos,
    isLoading,
    isError,
    isLastPage
  }
}
