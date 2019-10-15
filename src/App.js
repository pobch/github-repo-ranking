import React from 'react'
import styled from 'styled-components'
import { useInfiniteScroll } from './hooks/useInfiniteScroll'
import Card from './components/Card'
import Loading from './components/Loading'

// STYLES
const Layout = styled.div`
  width: 100%;
  padding: 20px;
`

// COMPONENT
function App() {
  const { repos, isLoading, isError, isLastPage } = useInfiniteScroll()

  return (
    <Layout>
      <h1>Repo Ranking Page</h1>
      <p>
        GitHub's public repositories which are created in the past 30 days, ranked by the number of
        stars:
      </p>
      {repos.map(repo => {
        return <Card key={repo.id} title={repo.name} repoUrl={repo.html_url} />
      })}
      {isLoading && <Loading />}
    </Layout>
  )
}

export default App
