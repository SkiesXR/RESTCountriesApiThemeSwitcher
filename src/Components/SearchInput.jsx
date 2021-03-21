import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// components
import { ReactComponent as MagnifyingGlassIcon } from '../Assets/Images/search.svg'
import { ReactComponent as XIcon } from '../Assets/Images/cancel.svg'
// utils
import { breakpoints } from './Mixins'

/* Styles Begin */

const SearchContainer = styled.div`
  width: calc(100% - 40px);
  max-width: 375px;
  height: 1.5rem;
  margin-right: 0;
  margin-bottom: 2.5rem;
  padding: 1rem 20px;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: var(--borderRadius);
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.elementBackground};

  @media (min-width: ${breakpoints.sm}) {
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
  display: ${({ $inputValue }) => !$inputValue && 'none'};
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translate(-50%, -50%);
  outline: none;

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
  color: ${({ theme }) => theme.color};
  caret-color: ${({ theme }) => theme.cursorColor};
  font-size: 1rem;
  
  ::placeholder { opacity: .8; }

  &:focus {
    outline: none;

    &::placeholder {opacity: 1; }
  }
`

const AccessibilityLabel = styled.label`
  width: 0;
  position: absolute;
  opacity: 0;
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
    <SearchContainer onClick={() => textInputRef.current.focus()} role='search'>
      <SearchIcon />
      <AccessibilityLabel htmlFor='search'>Search for a country</AccessibilityLabel>
      <TextInput
        id='search'
        onChange={handleChange}
        placeholder='Search for a country...'
        ref={textInputRef}
        type='text'
        value={countryFilter}
      />
      <CancelSearchIcon
        aria-label='Press enter to clear your search'
        $inputValue={countryFilter}
        onClick={() => setCountryFilter('')}
        onKeyDown={handleKeyDown}
        role='button'
        tabIndex='0'
      />
    </SearchContainer>
  );
}

export default SearchInput

SearchInput.propTypes = {
  countryFilter: PropTypes.string.isRequired,
  setCountryFilter: PropTypes.func.isRequired
}