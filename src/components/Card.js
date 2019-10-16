import React from 'react'
import styled from 'styled-components'
import { MEDIA } from '../utils/styles'

// STYLES
const Wrapper = styled.div`
  margin: 20px 0;
  padding: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 8px;
  overflow: hidden;
  ${MEDIA.DESKTOP`
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 12px;
    margin: 30px 0;
    padding: 20px;
  `}
`
const Title = styled.h2`
  word-break: break-word;
  grid-column: 1 / 3;
  ${MEDIA.DESKTOP`grid-column: 1 / 5;`}
`
const Description = styled.p`
  grid-column: 1 / 3;
  ${MEDIA.DESKTOP`grid-column: 1 / 5;`}
`

// COMPONENT
function Card(props) {
  const { title, repoUrl, description, starAmount, forkAmount, mainLanguage } = props

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <div>
        <strong>Star</strong>: {starAmount}
      </div>
      <div>
        <strong>Fork</strong>: {forkAmount}
      </div>
      <div>
        <em>{mainLanguage || '-'}</em>
      </div>
      <div>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          GitHub Link
        </a>
      </div>
    </Wrapper>
  )
}

export default Card
