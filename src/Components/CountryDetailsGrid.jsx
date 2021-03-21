import React from 'react'
import styled from 'styled-components'
import { breakpoints, FlexColStart } from './Mixins'
import { numberWithCommas, createCommaSeparatedList } from '../Utils/format'
import DataPair from './DataPair'

const Grid = styled.div`
  width: 100%;
  ${FlexColStart};

  @media (min-width: ${breakpoints.sm}) {
    margin-bottom: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }  
`

const CountryDetailsGrid = ({ country: { capital, currencies, languages, nativeName, population, region, subregion, topLevelDomain } }) => (
  <Grid>
    <DataPair label='Native Name' tab>{nativeName}</DataPair>
    <DataPair label='Top Level Domain' tab>{topLevelDomain}</DataPair>
    <DataPair label='Population' tab>{numberWithCommas(population)}</DataPair>
    <DataPair label='Currencies' tab>{createCommaSeparatedList(currencies, 'code')}</DataPair>
    <DataPair label='Region' tab>{region}</DataPair>
    <DataPair label='Languages' tab>{createCommaSeparatedList(languages, 'name')}</DataPair>
    <DataPair label='Sub Region' tab>{subregion}</DataPair>
    <DataPair label='Capital' tab>{capital}</DataPair>
  </Grid>
)

export default CountryDetailsGrid
