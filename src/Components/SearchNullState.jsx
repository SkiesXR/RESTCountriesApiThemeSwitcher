import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display:  grid;
  place-items: center;
  width: 100%;
  margin-top: 5rem;
`

const Header = styled.h1`
  color: ${({ theme }) => theme.color};
  margin-bottom: 1rem;
`

const Message = styled.span`
  color: ${({ theme }) => theme.color};
  font-weight: 400;
`

const SearchNullState = ({ query }) => {
  return (
    <Container>
      <Header>{`No results found for "${query}"`}</Header>
      <Message>Placeholder text that's SUPER helpful</Message>
    </Container>
  )
}

export default SearchNullState
