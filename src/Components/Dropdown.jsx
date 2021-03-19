import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
// components
import { breakpoints, FlexColStart } from './Mixins'
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
  position: relative;
  border-radius: var(--borderRadius);
  background: ${({ theme }) => theme.elementBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;

  &:focus {
    outline: ${({ theme }) => theme.focusColor};
  }
`

const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const RegionFilterLabel = styled.div`
  width: 100%;
  user-select: none;
  background: ${({ theme }) => theme.elementBackground};

  @media (min-width: ${breakpoints.sm}) {
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
  width: 100%;
  ${FlexColStart};
  position: absolute;
  top: 60px;
  left: 0;
  z-index: 2;
  line-height: 1.75rem;
  font-size: .8rem;
  border-radius: var(--borderRadius);
  background: ${({ theme }) => theme.elementBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  animation: ${fadeIn} .25s ease-in;
`

const RegionOption = styled.div`
  width: calc(100% - 25px);
  padding: 5px 0 5px 25px;
  user-select: none;
  font-size: 1.25rem;
  line-height: 2rem;
  background: ${({ active, theme }) => active && theme.filterBackgroundHover};

  @media (min-width: ${breakpoints.sm}) {
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
    // allow tab key default behavior for navigation
    e.keyCode !== 9 && e.preventDefault()

    // "enter" key, activates a region filter
    if (e.keyCode === 13) {
      optionIndex && onChange(regions[optionIndex])
      setIsOpen(false)

    // "space key", opens/closes region filter dropdown
    } else if (e.keyCode === 32) {
      setIsOpen(prevState => !prevState)

      // "up arrow" key, select next region option
    } else if (e.keyCode === 38 && optionIndex > 0) {
      setOptionIndex(optionIndex => optionIndex - 1)

    // "down arrow" key, select previous region option
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

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  regions: PropTypes.array.isRequired,
  regionFilter: PropTypes.string,
}