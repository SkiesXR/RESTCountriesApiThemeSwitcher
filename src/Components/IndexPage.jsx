import React from 'react'
import styled from 'styled-components'
import CountryCard from './CountryCard'

const CountriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 25px;
  margin-top: 100px;
`

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <CountriesGrid>
      {data.map(country => <CountryCard data={country} key={country.alpha3Code}/>)}
    </CountriesGrid>
  )
}

export default IndexPage