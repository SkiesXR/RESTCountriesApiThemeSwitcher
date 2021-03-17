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
  transform: ${({ isDropdownOpen }) => !isDropdownOpen && 'rotate(180deg)'};
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

  @media (min-width: 576px) {
    font-size: 1rem;
    line-height: 1.75rem;

    &:hover { background: ${({ theme }) => theme.filterBackgroundHover}; }
  }
`

/* Styles End */

const Dropdown = ({ onChange, regions, regionFilter }) => {
  const [isOpen, setIsOpen] = useState(false)

  // Render dropdown list of unique regions based on countries data
  const renderRegionOptions = () => (
    regions.map(region =>
      <RegionOption key={region} onClick={() => onChange(region)}>{region}</RegionOption>
    )
  )

  // If user has tabbed to this element, hitting "enter" key opens/closes it
  const handleKeyDown = (e) => {
    e.key === 'Enter' && setIsOpen(prevState => !prevState)
  }

  return (
    <DropdownContainer
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen(prevState => !prevState)}
      onKeyDown={handleKeyDown}
      tabIndex={0}  // required for onBlur event to fire
    >
      <DropdownHeader>
        <RegionFilterLabel>{regionFilter}</RegionFilterLabel>
        <StyledIcon isDropdownOpen={isOpen}/>
      </DropdownHeader>
      {isOpen && regions.length && <RegionOptions isOpen={isOpen}>{renderRegionOptions()}</RegionOptions>}
    </DropdownContainer>
  )
}

export default Dropdown

Dropdown.defaultProps = {
  regions: []
}