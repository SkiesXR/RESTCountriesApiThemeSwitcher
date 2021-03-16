import React, { useCallback, useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as BackArrow } from '../Assets/Images/arrow_back.svg'
import { numberWithCommas } from '../Utils/format'
import DataPair from './DataPair'

const Container = styled.div`
  background: ${({ theme }) => theme.bodyBackground};
  padding: 0 75px;
  margin: 50px 0;
`

const Icon = styled(BackArrow)`
  margin-right: 10px;
  width: 25px;
  height: 25px;
`

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 7px 15px;
  border-radius: 5px;
  background: ${({ theme }) => theme.elementBackground};
  font-size: .8rem;
  transition: all .15s ease-in;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.filterBackgroundHover};
  }
`

const CountryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
`

const FlagImageContainer = styled.div`
  max-width: 600px;
  width: 50%;
`

const FlagImage = styled.img`
  margin-right: 75px;
  object-fit: cover;
  width: 100%;
`

const DetailsContainer = styled.div`
  padding-top: 25px;
  padding-left: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
`

const Name = styled.h2`
  width: 100%;
  margin-bottom: 2rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  width: 100%;
  margin-bottom: 3rem;
`

const BorderCountriesSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  div {
    margin-top: 10px;
    font-size: .8rem;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`

const BorderText = styled.div`
  margin-right: 20px;
  font-weight: bold;
`

const DetailPage = ({ data }) => {
  const history = useHistory()
  const { id } = useParams()
  const [country, setCountry] = useState({})
  const [borderCountries, setBorderCountries] = useState({})
  const { capital, currencies, flag, languages, name, nativeName, population, region, subregion, topLevelDomain } = country

  // Build a collection of border countries
  // Shape = { countryName: { name: countryName, code: numericCode } }
  const generateBorderCountries = useCallback((country) => {
    const borderCodes = Object.values(country.borders)

    return borderCodes.reduce((acc, border) => {
      const borderedCountry = data.find(country => country.alpha3Code === border)
      return borderedCountry && borderedCountry.numericCode
        ? { ...acc, [borderedCountry.name]: { name: borderedCountry.name, code: borderedCountry.numericCode } }
        : acc
    }, {})
  }, [data])

  useEffect(() => {
    const country = data.find(country => country.numericCode === id)
    if (country) {
      setCountry(country)
      setBorderCountries(generateBorderCountries(country))
    }
  }, [data, generateBorderCountries, id])

  if (!Object.keys(country).length) return null

  const renderCurrencies = () => currencies.map(cur => cur.code).join(', ')
  const renderLanguages = () => languages.map(lang => lang.name).join(', ')

  // Render a list of buttons linking to border countries
  const renderBorderCountries = () => {
    const borders = Object.values(borderCountries).map(country => (
      <Button key={country.code} onClick={() => history.push(`/detail/${country.code}`)}>
        {country.name}
      </Button>
    ))

    return (
      <>
        <BorderText>Border Countries: </BorderText>
        {borders}
      </>
    )
  }

  return (
    <Container>
      <Button onClick={() => history.push('/')}>
        <Icon />
        <span>Back</span>
      </Button>
      <CountryContainer>
        <FlagImageContainer>
          <FlagImage src={flag} alt={`${name} flag`} />
        </FlagImageContainer>
        <DetailsContainer>
          <Name>{name}</Name>
          <Grid>
            <DataPair label='Native Name'>{nativeName}</DataPair>
            <DataPair label='Top Level Domain'>{topLevelDomain}</DataPair>
            <DataPair label='Population'>{numberWithCommas(population)}</DataPair>
            <DataPair label='Currencies'>{renderCurrencies()}</DataPair>
            <DataPair label='Region'>{region}</DataPair>
            <DataPair label='Languages'>{renderLanguages()}</DataPair>
            <DataPair label='Sub Region'>{subregion}</DataPair>
            <DataPair label='Capital'>{capital}</DataPair>
          </Grid>
          <BorderCountriesSection>
          {Object.keys(borderCountries).length ? renderBorderCountries() : null}
          </BorderCountriesSection>
        </DetailsContainer>
      </CountryContainer>
    </Container>
  )
}

export default DetailPage