import React from 'react'
import styled from 'styled-components'
import { useInfiniteScroll } from './hooks/useInfiniteScroll'
import Card from './components/Card'
import Loading from './components/Loading'
import Error from './components/Error'
import { MEDIA } from './utils/styles'

// STYLES
const Layout = styled.div`
  width: 100%;
  padding: 20px;
  ${MEDIA.DESKTOP`
    max-width: 750px;
    margin: 0 auto;
  `}
`
const Heading = styled.h1`
  margin-bottom: 8px;
`
const Description = styled.p`
  margin-bottom: 8px;
`
const End = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-style: italic;
`

// COMPONENT
function App() {
  const { repos, isLoading, isError, isLastPage } = useInfiniteScroll()

  return (
    <Layout>
      <Heading>Repo Ranking</Heading>
      <Description>GitHub's public repositories created in the past 30 days</Description>
      <div>
        Rank by: <em>Star</em>
      </div>
      {repos.map(repo => {
        return (
          <Card
            key={repo.id}
            title={repo.name}
            repoUrl={repo.html_url}
            description={repo.description || '-'}
            starAmount={repo.stargazers_count || 0}
            forkAmount={repo.forks_count || 0}
            mainLanguage={repo.language || '-'}
          />
        )
      })}
      {isLastPage && <End>-- END --</End>}
      {isLoading && <Loading />}
      {isError && <Error />}
    </Layout>
  )
}

export default App
