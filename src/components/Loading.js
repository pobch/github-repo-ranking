import React from 'react'
import styled from 'styled-components'

// STYLES
const Wrapper = styled.div`
  padding: 5px 0;
  width: 100%;
  background-color: salmon;
  color: white;
  text-align: center;
`

// COMPONENT
function Loading() {
  return (
    <Wrapper>
      <strong>Loading . . .</strong>
    </Wrapper>
  )
}

export default Loading
