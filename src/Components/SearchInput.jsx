import React, { useRef } from 'react'
import styled from 'styled-components'
// icons
import { ReactComponent as MagnifyingGlassIcon } from '../Assets/Images/search.svg'
import { ReactComponent as XIcon } from '../Assets/Images/cancel.svg'

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
  position: relative;

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

const SearchIcon = styled(MagnifyingGlassIcon)`
  width: 25px;
  margin-right: 15px;

  * {
    stroke: #dfdfdf;
  }
`

const CancelSearchIcon = styled(XIcon)`
  width: 15px;
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translate(-50%, -50%);
  display: ${({ inputValue }) => !inputValue && 'none'};

  &:hover {
    cursor: pointer;
  }

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

const AccessibilityLabel = styled.label`
  position: absolute;
  opacity: 0;
  width: 0;
  overflow: hidden;
`

/* Styles End */

const SearchInput = ({ countryFilter, setCountryFilter }) => {
  const textInputRef = useRef()

  const handleChange = (e) => {
    const { value } = e.target
    // allow blank input or alphabet characters
    if (value === '' || value.match(/[A-Za-z]/g)) setCountryFilter(value)
  }

  // If user has tabbed to this element, hitting "enter" key clears the search
  const handleKeyDown = (e) => {
    e.key === 'Enter' && setCountryFilter('')
  }

  return (
    <SearchContainer onClick={() => textInputRef.current.focus()}>
      <SearchIcon />
      <AccessibilityLabel htmlFor='search'/>
      <TextInput
        autoFocus={true}
        id='search'
        onChange={handleChange}
        placeholder='Search for a country...'
        ref={textInputRef}
        type='text'
        value={countryFilter}
      />
      <CancelSearchIcon
        aria-label='Press enter to clear your search'
        inputValue={countryFilter}
        onClick={() => setCountryFilter('')}
        onKeyDown={handleKeyDown}
        role='button'
        tabIndex='0'
      />
    </SearchContainer>
  );
}

export default SearchInput
