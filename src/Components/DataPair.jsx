import React from 'react'
import PropTypes from 'prop-types' 
import styled from 'styled-components'

const StyledDataPair = styled.span`
  &:focus { outline: ${({ theme }) => theme.focusColor} }
`

const DataPair = ({ children, label, tab }) => (
    <StyledDataPair tabIndex={tab ? 0 : -1}>
      <b>{label}:&nbsp;</b>
      {children}
    </StyledDataPair>
)

export default DataPair

DataPair.defaultProps = {
  tab: false
}

DataPair.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  label: PropTypes.string.isRequired,
  tab: PropTypes.bool,
}