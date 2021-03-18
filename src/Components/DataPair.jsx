import React from 'react'
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