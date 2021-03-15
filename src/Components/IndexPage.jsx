import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import CountryCard from './CountryCard'

const defaultRegionFilterOption = 'Filter by Region'

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
  const [regionFilter, setRegionFilter] = useState('Filter by Region')

  // Filter country list by region
  const filteredData = useMemo(() => {
    return regionFilter && regionFilter !== defaultRegionFilterOption
      ? data.filter(country => country.region === regionFilter)
      : data
  }, [data, regionFilter])

  // Produce list of unique regions based on countries data
  const renderRegionOptions = () => {
    const theRegions = data.reduce((regions, country) => country.region && regions.indexOf(country.region) === -1
      ? [...regions, country.region]
      : regions
    , [defaultRegionFilterOption])

    return theRegions.map(region => <option value={region}>{region}</option>)
  }
  
  if (!data) return null

  return (
    <>
      <InputAndFilterSection>
        <TextInput></TextInput>
        <RegionFilter onChange={(e) => setRegionFilter(e.target.value)}>
          {data?.length && renderRegionOptions()}
        </RegionFilter>
      </InputAndFilterSection>
      <CountriesGrid>
        {filteredData.map(country => <CountryCard data={country} key={country.alpha3Code} theme={theme} />)}
      </CountriesGrid>
    </>
  )
}

export default IndexPage