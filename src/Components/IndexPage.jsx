import React from 'react'
import styled from 'styled-components'
import CountryCard from './CountryCard'

const CountriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 55px 55px;
  margin-top: 100px;
  padding: 0 75px;
`

const IndexPage = ({ data, theme }) => {
  return (
    <CountriesGrid>
      {data.map(country => <CountryCard data={country} key={country.alpha3Code} theme={theme} />)}
    </CountriesGrid>
  )
}

export default IndexPage