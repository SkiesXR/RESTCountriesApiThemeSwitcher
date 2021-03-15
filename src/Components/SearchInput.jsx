import React, { useRef } from 'react'
import styled from 'styled-components'
import { ReactComponent as Icon } from '../Assets/Images/search.svg'

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  box-shadow: ${({ theme }) => theme.name === 'Light'
    ? '0px 10px 13px -7px #e8e8e8, 5px 5px 15px 5px rgba(0,0,0,0)'
    : '0px 10px 13px -12px #232323, 5px 5px 15px 5px rgba(0,0,0,0)'};
  padding: 10px 25px;
  border-radius: 5px;
  width: 300px;
  min-width: 200px;
  background: ${({ theme }) => theme.elementBackground};

  &:focus {
    input
  }
`

const SearchIcon = styled(Icon)`
  width: 25px;
  margin-right: 15px;
`

const TextInput = styled.input`
  border: none;
  background: none;

  &:focus {
    outline: none;
  }
`

const SearchInput = ({ countryFilter, setCountryFilter, theme }) => {
  const textInputRef = useRef()

  return (
    <SearchContainer onClick={() => textInputRef.current.focus()}>
      <SearchIcon />
      <TextInput
        onChange={(e) => setCountryFilter(e.target.value)}
        placeholder='Search for a country...'
        ref={textInputRef}
        theme={theme}
        type='text'
        value={countryFilter}
      />
    </SearchContainer>
  );
}

export default SearchInput

/* TODO:
- Add hover state for Search Container
*/