import React, { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// components
import CountryCard from './CountryCard'
import Dropdown from './Dropdown'
import SearchInput from './SearchInput'
import SearchNullState from './SearchNullState'
// utils
import { breakpoints, FlexColCenter } from './Mixins'

/* Styles Begin */

const InputAndFilterSection = styled.div`
  padding: 2.5rem 25px 0;
  ${FlexColCenter}

  @media (min-width: ${breakpoints.sm}) {
    padding: 50px 75px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const CountriesGrid = styled.div`
  margin-top: 3rem;
  padding: 0 3rem;
  ${FlexColCenter}

  @media (min-width: ${breakpoints.sm}) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 55px 55px;
    margin-top: 100px;
    padding: 0 75px;
  }
`

/* Styles End */

const defaultRegionFilterOption = 'Filter by Region'

const IndexPage = ({ data }) => {
  const [regionFilter, setRegionFilter] = useState(defaultRegionFilterOption)
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

  // Iterate through countries, produce list of unique regions
  const getRegionOptions = () => {
    const options = data.reduce((regions, country) => country.region && regions.indexOf(country.region) === -1
      ? [...regions, country.region]
      : regions
    , [defaultRegionFilterOption])

    // exclude currently selected region filter
    return options.filter(option => option !== regionFilter)
  }
  
  if (!data) return null

  return (
    <>
      <InputAndFilterSection>
        <SearchInput
          countryFilter={countryFilter}
          setCountryFilter={setCountryFilter}
        />
        {filteredData.length ? <Dropdown
          onChange={setRegionFilter}
          regionFilter={regionFilter}
          regions={getRegionOptions()}
        /> : null}
      </InputAndFilterSection>
      {filteredData.length
        ? (
          <CountriesGrid>
            {filteredData.map(country =>
              <CountryCard
                data={country}
                key={country.alpha3Code}
              />
            )}
          </CountriesGrid>
        ) : <SearchNullState query={countryFilter}/>
      }
    </>
  )
}

export default IndexPage

IndexPage.defaultProps = {
  data: []
}

IndexPage.propTypes = {
  data: PropTypes.array.isRequired
}