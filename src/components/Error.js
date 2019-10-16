import React from 'react'
import styled from 'styled-components'

// STYLES
const Wrapper = styled.div`
  padding: 5px 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
  word-break: break-word;
`

// COMPONENT
function Error() {
  return (
    <Wrapper>
      <strong>Error, please refresh the page</strong>
    </Wrapper>
  )
}

export default Error
