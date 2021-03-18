import React, { useCallback, useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom'
// components
import DataPair from './DataPair'
import { FlexColCenter, FlexColStart, FlexRowCenter, FlexStartCenter } from './Mixins'
// utils
import { numberWithCommas } from '../Utils/format'
// icons
import { ReactComponent as BackArrow } from '../Assets/Images/arrow_back.svg'

/* Styles Begin */

const Container = styled.div`
  background: ${({ theme }) => theme.bodyBackground};
  padding: 0 25px;
  margin: 2rem 0;

  @media (min-width: 576px) {
    padding: 0 75px;
    margin: 50px 0;
  }  
`

const Icon = styled(BackArrow)`
  margin-right: 10px;
  width: 25px;
  height: 25px;
`

const Button = styled.div`
  ${FlexRowCenter};
  width: fit-content;
  padding: 7px 15px;
  border-radius: var(--borderRadius);
  background: ${({ theme }) => theme.elementBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: background .15s ease-in;

  @media (min-width: 576px) {
    &:focus {
      outline: ${({ theme }) => theme.focusColor};
    }

    &:hover {
      cursor: pointer;
      background: ${({ theme }) => theme.filterBackgroundHover};

      svg {
        transition: transform .5s cubic-bezier(0.68, -0.6, 0.32, 1.6);
        transform: translateX(-10%);
      }
    }
  } 
`
/* Styles End */

const CountryContainer = styled.div`
  ${FlexColCenter};
  margin-top: 50px;

  @media (min-width: 576px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }  
`

const FlagImageContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (min-width: 576px) {
    max-width: 700px;
    width: 50%;

    &:focus { outline: ${({ theme }) => theme.focusColor}; }
  }  
`

const FlagImage = styled.img`
  object-fit: cover;
  width: 100%;

  @media (min-width: 576px) {
    margin-right: 75px;
  } 
` 

const DetailsContainer = styled.div`
  ${FlexColStart};
  align-items: center;
  width: 100%;

  span {
    line-height: 2.25rem;
    font-size: 1.25rem;
  }

  @media (min-width: 576px) {
    padding-top: 25px;
    padding-left: 50px;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 50%;
  }  
`

const Name = styled.h2`
  width: 100%;
  margin-bottom: 2rem;
  margin-top: 0;
`

const Grid = styled.div`
  ${FlexColStart};
  width: 100%;

  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    margin-bottom: 3rem;
  }  
`

const BorderCountriesSection = styled.div`
  width: 100%;
  ${FlexStartCenter};
  flex-wrap: wrap;
`

const BorderCountries = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  div {
    margin-top: 10px;
    font-size: 1.25rem;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  @media (min-width: 576px) {
    ${FlexStartCenter};
    flex-wrap: wrap;
  }  
`

const BorderCountriesHeader = styled.span`
  font-weight: bold;
  user-select: none;
  width: 100%;

  @media (min-width: 576px) {
    width: initial;
    margin-top: 10px;
    margin-right: 20px;
  }  
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
    return Object.values(borderCountries).map(country => (
      <Button key={country.code} onClick={() => history.push(`/detail/${country.code}`)}>
        {country.name}
      </Button>
    ))
  }

  return (
    <Container>
      <Button
        onClick={() => history.push('/')}
        onKeyDown={(e) => e.key === 'Enter' && history.push('/')}
        tabIndex='0'
      >
        <Icon />
        <span>Back</span>
      </Button>
      <CountryContainer>
        <FlagImageContainer tabIndex='0'>
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
            <BorderCountriesHeader>Border Countries: </BorderCountriesHeader>
            <BorderCountries>
              {Object.keys(borderCountries).length ? renderBorderCountries() : null}
            </BorderCountries>
          </BorderCountriesSection>
        </DetailsContainer>
      </CountryContainer>
    </Container>
  )
}

export default DetailPage