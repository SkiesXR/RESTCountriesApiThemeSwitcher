import React from 'react'
import styled from 'styled-components'

const LoaderMessage = styled.h1`
  margin: 100px auto;
  width: fit-content;
  color: ${({ theme }) => theme.color}
`

const Loader = () => {
  return (
    <LoaderMessage>Loading...</LoaderMessage>
  )
}

export default Loader

// TODO: Add spinner