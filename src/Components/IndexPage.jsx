import React from 'react'
import styled from 'styled-components'
import CountryCard from './CountryCard'

const InputAndFilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TextInput = styled.div``
const RegionFilter = styled.select`

`

const CountriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 55px 55px;
  margin-top: 100px;
  padding: 0 75px;
`

const IndexPage = ({ data, theme }) => {
  const renderRegionOptions = () => {
    const regions = data.reduce((regions, country) =>
      regions.indexOf(country.region) === -1 ? [...regions, country.region] : regions, [])
    return regions.map(region => <option>{region || 'Unknown'}</option>)
  }

  return (
    <>
      <InputAndFilterSection>
        <TextInput></TextInput>
        <RegionFilter>
          {data?.length && renderRegionOptions()}
        </RegionFilter>
      </InputAndFilterSection>
      <CountriesGrid>
        {data.map(country => <CountryCard data={country} key={country.alpha3Code} theme={theme} />)}
      </CountriesGrid>
    </>
  )
}

export default IndexPage