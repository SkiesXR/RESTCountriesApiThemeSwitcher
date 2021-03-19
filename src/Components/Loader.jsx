import React from 'react'
import styled from 'styled-components'
import Spinner from './Spinner'
import { FlexColCenter } from './Mixins'

const LoadingContainer = styled.div`
  ${FlexColCenter};
  width: 100%;
  margin-top: 100px;
`

const LoaderMessage = styled.h1`
  width: fit-content;
  color: ${({ theme }) => theme.color}
`

const Loader = () => {
  return (
    <LoadingContainer>
      <Spinner />
      <LoaderMessage>Loading...</LoaderMessage>
    </LoadingContainer>
  )
}

export default Loader