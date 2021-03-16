import React from 'react'

const DataPair = ({ label, children }) => (
    <span>
      <b>{label}:&nbsp;</b>
      {children}
    </span>
)

export default DataPair