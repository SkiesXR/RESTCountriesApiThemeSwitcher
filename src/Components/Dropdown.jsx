import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(-10%); };
  to { opacity: 1; transform: translateX(0%); };
`

const DropdownContainer = styled.div`
  width: 140px;
  padding: 15px 25px;
  background: ${({ theme }) => theme.elementBackground};
  position: relative;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`

const RegionFilterLabel = styled.div`
  width: 100%;
  font-size: .8rem;
  background: ${({ theme }) => theme.elementBackground};
  user-select: none;
`

const RegionOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.75rem;
  width: 100%;
  border-radius: 5px;
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 2;
  font-size: .8rem;
  animation: ${fadeIn} .25s ease-in;
  background: ${({ theme }) => theme.elementBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
`

const RegionOption = styled.div`
  width: calc(100% - 10px);
  padding-left: 10px;
  user-select: none;

  &:hover {
    background: ${({ theme }) => theme.filterBackgroundHover};
  }
`

const Dropdown = ({ onChange, regions, regionFilter }) => {
  const [isOpen, setIsOpen] = useState(false)

  // Render dropdown list of unique regions based on countries data
  const renderRegionOptions = () => (
    regions.map(region =>
      <RegionOption key={region} onClick={() => onChange(region)}>{region}</RegionOption>
    )
  )

  return (
    <DropdownContainer
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen(prevState => !prevState)}
      tabIndex={0}  // required for onBlur event to fire
    >
      <RegionFilterLabel>{regionFilter}</RegionFilterLabel>
      {isOpen && regions.length && <RegionOptions isOpen={isOpen}>{renderRegionOptions()}</RegionOptions>}
    </DropdownContainer>
  )
}

export default Dropdown

Dropdown.defaultProps = {
  regions: []
}