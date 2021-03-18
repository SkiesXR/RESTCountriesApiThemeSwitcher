import React from 'react'
import styled from 'styled-components'

const LoaderMessage = styled.h1`
  margin: 100px auto;
  width: fit-content;
  color: ${({ theme }) => theme.color}
`

function Loader(props) {
  return (
    <LoaderMessage>Loading...</LoaderMessage>
  )
}

export default Loader