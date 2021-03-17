import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
// icons
import { ReactComponent as DropdownIcon } from '../Assets/Images/arrow.svg'

/* Styles Begin */

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(-10%); };
  to { opacity: 1; transform: translateX(0%); };
`

const DropdownContainer = styled.div`
  width: 140px;
  padding: 15px 25px;
  background: ${({ theme }) => theme.elementBackground};
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 5px;
  position: relative;
  -webkit-tap-highlight-color: transparent;

  &:focus { outline: none; }
`

const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const RegionFilterLabel = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.elementBackground};
  user-select: none;

  @media (min-width: 576px) {
    font-size: 1rem;
  }
`

const StyledIcon = styled(DropdownIcon)`
  width: 20px;
  transform: ${({ $isDropdownOpen }) => !$isDropdownOpen && 'rotate(180deg)'};
  transition: transform .25s ease-in;

    * { stroke: ${({ theme }) => theme.color}; }
`

const RegionOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.75rem;
  width: 100%;
  border-radius: 5px;
  position: absolute;
  top: 60px;
  left: 0;
  z-index: 2;
  font-size: .8rem;
  animation: ${fadeIn} .25s ease-in;
  background: ${({ theme }) => theme.elementBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
`

const RegionOption = styled.div`
  width: calc(100% - 25px);
  padding-left: 25px;
  padding-top: 5px;
  padding-bottom: 5px;
  user-select: none;
  font-size: 1.25rem;
  line-height: 2rem;
  background: ${({ active, theme }) => active && theme.filterBackgroundHover};

  @media (min-width: 576px) {
    font-size: 1rem;
    line-height: 1.75rem;

    &:hover { background: ${({ theme }) => theme.filterBackgroundHover}; }
  }
`

/* Styles End */

const Dropdown = ({ onChange, regions, regionFilter }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [optionIndex, setOptionIndex] = useState(null)

  // Render dropdown list of unique regions based on countries data
  const renderRegionOptions = () => (
    regions.map((region, index) =>
      <RegionOption
        active={optionIndex === index}
        key={region}
        onClick={() => onChange(region)}
        role='option'
      >
        {region}
      </RegionOption>
    )
  )

  // Support keyboard navigation, handle side effects
  const handleKeyDown = (e) => {
    e.preventDefault()
    // "enter" key
    if (e.keyCode === 13) {
      onChange(regions[optionIndex])
    // "space key"
    } else if (e.keyCode === 32) {
      setIsOpen(prevState => !prevState)
      // "up" arrow
    } else if (e.keyCode === 38 && optionIndex > 0) {
      setOptionIndex(optionIndex => optionIndex - 1)
    // "down" arrow  
    } else if (e.keyCode === 40 && optionIndex < regions.length - 1) {
      setOptionIndex(optionIndex => optionIndex + 1)
    }
  }

  return (
    <DropdownContainer
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen(prevState => !prevState)}
      onKeyDown={handleKeyDown}
      tabIndex={0}  // required for onBlur event to fire
    >
      <DropdownHeader role='listbox'>
        <RegionFilterLabel>{regionFilter}</RegionFilterLabel>
        <StyledIcon $isDropdownOpen={isOpen} />
      </DropdownHeader>
      {isOpen && regions.length && <RegionOptions isOpen={isOpen}>{renderRegionOptions()}</RegionOptions>}
    </DropdownContainer>
  )
}

export default Dropdown

Dropdown.defaultProps = {
  regions: []
}