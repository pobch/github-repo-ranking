import React from 'react'
import styled from 'styled-components'

// STYLES
const Wrapper = styled.div`
  margin: 20px 0;
  padding: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`
const Title = styled.h2`
  word-break: break-word;
`

// COMPONENT
function Card(props) {
  const { title, repoUrl, description, starAmount, forkAmount, mainLanguage } = props

  return (
    <Wrapper>
      <Title>{title}</Title>
      <p>{description}</p>
      <span>Star: {starAmount} </span>
      <span>Fork: {forkAmount} </span>
      {mainLanguage && <span>{mainLanguage} </span>}
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        Link
      </a>
    </Wrapper>
  )
}

export default Card
