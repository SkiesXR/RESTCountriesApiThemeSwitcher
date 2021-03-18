import React from 'react'
import styled from 'styled-components'

const StyledDataPair = styled.span`
  &:focus { outline: ${({ theme }) => theme.focusColor} }
`

const DataPair = ({ label, children }) => (
    <StyledDataPair tabIndex='0'>
      <b>{label}:&nbsp;</b>
      {children}
    </StyledDataPair>
)

export default DataPair