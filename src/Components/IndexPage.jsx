import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import CountryCard from './CountryCard'
import SearchInput from './SearchInput'

const defaultRegionFilterOption = 'Filter by Region'

const InputAndFilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 75px 0;
`

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
  const [countryFilter, setCountryFilter] = useState('')

  // Filter countries by country
  const filterByCountry = useCallback(countries => {
    return countryFilter
      ? countries.filter(country => country.name.toLowerCase().startsWith(countryFilter.toLowerCase()))
      : countries
  }, [countryFilter])

  // Filter countries by region
  const filterByRegion = useCallback(countries => {
    return regionFilter && regionFilter !== defaultRegionFilterOption
      ? data.filter(country => country.region === regionFilter)
      : data
  }, [data, regionFilter])

  // Countries with filters and/or search input applied
  const filteredData = useMemo(() => {
    const countriesFilteredByRegion = filterByRegion(data)
    return filterByCountry(countriesFilteredByRegion)
  }, [data, filterByCountry, filterByRegion])

  // Render dropdown list of unique regions based on countries data
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
        <SearchInput countryFilter={countryFilter} setCountryFilter={setCountryFilter} theme={theme} />
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