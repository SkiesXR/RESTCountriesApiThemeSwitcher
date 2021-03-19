import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

/* Styles Begin */

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10%); };
  to { opacity: 1; transform: translateY(0%); };
`

const Container = styled.div`
  width: 100%;
  margin-top: 5rem;
  display:  grid;
  place-items: center;
  animation: ${fadeIn} .25s ease-in;
`

const Header = styled.h1`
  color: ${({ theme }) => theme.color};
  margin-bottom: 1rem;
`

const Message = styled.span`
  color: ${({ theme }) => theme.errorSubheaderColor};
  font-weight: 400;
`

/* Styles End */

const SearchNullState = ({ query }) => {
  return (
    <Container>
      <Header>{`No results found for "${query}"`}</Header>
      <Message>Please check your spelling and try again</Message>
    </Container>
  )
}

export default SearchNullState

SearchNullState.defaultProps = {
  query: ''
}

SearchNullState.propTypes = {
  query: PropTypes.string.isRequired,
}
