import React, { useRef } from 'react'
import styled from 'styled-components'
// icons
import { ReactComponent as Icon } from '../Assets/Images/search.svg'

/* Styles Begin */

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 1rem 20px;
  border-radius: 5px;
  height: 1.5rem;
  background: ${({ theme }) => theme.elementBackground};
  margin-right: 0;
  margin-bottom: 2.5rem;
  max-width: 375px;
  width: calc(100% - 40px);

  @media (min-width: 576px) {
    width: 375px;
    min-width: 200px;
    margin-right: 2rem;
    margin-bottom: 0;
  }

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
  
  ::placeholder { opacity: .8; }

  &:focus {
    outline: none;

    &::placeholder {opacity: 1; }
  }
`

/* Styles End */

const SearchInput = ({ countryFilter, setCountryFilter }) => {
  const textInputRef = useRef()

  const handleChange = (e) => {
    const { value } = e.target
    // allow blank input or alphabet characters
    if (value === '' || value.match(/[A-Za-z]/g)) setCountryFilter(value)
  }

  return (
    <SearchContainer onClick={() => textInputRef.current.focus()}>
      <SearchIcon />
      <TextInput
        onChange={handleChange}
        placeholder='Search for a country...'
        ref={textInputRef}
        type='text'
        value={countryFilter}
        autoFocus={true}
      />
    </SearchContainer>
  );
}

export default SearchInput
