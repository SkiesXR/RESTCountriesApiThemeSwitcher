import React, { useRef } from 'react'
import styled from 'styled-components'
import { ReactComponent as Icon } from '../Assets/Images/search.svg'

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 15px 25px;
  border-radius: 5px;
  width: 375px;
  min-width: 200px;
  height: 25px;
  background: ${({ theme }) => theme.elementBackground};

  &:focus, &:focus-within {
    box-shadow: ${({ theme }) => theme.name === 'Light'
    ? '0px 10px 13px -7px #bcbcbc, 5px 5px 15px 5px rgba(0,0,0,0)'
    : '0 1px 2px rgba(0,0,0,0.07)', 
    '0 2px 4px rgba(0,0,0,0.07)', 
    '0 4px 8px rgba(0,0,0,0.07)', 
    '0 8px 16px rgba(0,0,0,0.07)',
    '0 16px 32px rgba(0,0,0,0.07)', 
    '0 32px 64px rgba(0,0,0,0.07)'};
  }
`

const SearchIcon = styled(Icon)`
  width: 25px;
  margin-right: 15px;

  * {
    stroke: #dfdfdf;
  }
`

const TextInput = styled.input`
  border: none;
  background: none;
  caret-color: ${({ theme }) => theme.cursorColor};
  color: ${({ theme }) => theme.color};
  
  ::placeholder { opacity: .25; }

  &:focus {
    outline: none;

    &::placeholder {opacity: .5; }
  }
`

const SearchInput = ({ countryFilter, setCountryFilter }) => {
  const textInputRef = useRef()

  return (
    <SearchContainer onClick={() => textInputRef.current.focus()}>
      <SearchIcon />
      <TextInput
        onChange={(e) => setCountryFilter(e.target.value)}
        placeholder='Search for a country...'
        ref={textInputRef}
        type='text'
        value={countryFilter}
      />
    </SearchContainer>
  );
}

export default SearchInput
