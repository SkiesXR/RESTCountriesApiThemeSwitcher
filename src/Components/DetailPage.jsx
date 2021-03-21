import React, { useCallback, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom'
// components
import DataPair from './DataPair'
import { ReactComponent as BackArrow } from '../Assets/Images/arrow_back.svg'
// utils
import { numberWithCommas } from '../Utils/format'
import { breakpoints, FlexColCenter, FlexColStart, FlexRowCenter, FlexStartCenter, uniformSize } from './Mixins'
// icons

/* Styles Begin */

const Container = styled.div`
  margin: 2rem 0;
  padding: 0 25px;
  background: ${({ theme }) => theme.bodyBackground};

  @media (min-width: ${breakpoints.sm}) {
    margin: 50px 0;
    padding: 0 75px;
  }  
`

const Icon = styled(BackArrow)`
  ${uniformSize(25)};
  margin-right: 10px;
`

const Button = styled.div`
  width: fit-content;
  ${FlexRowCenter};
  padding: 7px 15px;
  border-radius: var(--borderRadius);
  background: ${({ theme }) => theme.elementBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: background .15s ease-in;

  @media (min-width: ${breakpoints.sm}) {
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

  @media (min-width: ${breakpoints.sm}) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }  
`

const FlagImageContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (min-width: ${breakpoints.sm}) {
    width: 50%;
    max-width: 700px;

    &:focus { outline: ${({ theme }) => theme.focusColor}; }
  }  
`

const FlagImage = styled.img`
  width: 100%;
  object-fit: cover;

  @media (min-width: ${breakpoints.sm}) {
    margin-right: 75px;
  } 
` 

const DetailsContainer = styled.div`
  width: 100%;
  ${FlexColStart};
  align-items: center;

  span {
    line-height: 2.25rem;
    font-size: 1.25rem;
  }

  @media (min-width: ${breakpoints.sm}) {
    width: 50%;
    padding-top: 25px;
    padding-left: 50px;
    justify-content: space-between;
    flex-wrap: wrap;
  }  
`

const Name = styled.h2`
  width: 100%;
  margin-top: 0;
  margin-bottom: 2rem;

  &:focus { outline: ${({ theme }) => theme.focusColor}; }
`

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

const BorderCountriesSection = styled.div`
  width: 100%;
  ${FlexStartCenter};
  flex-wrap: wrap;
`

const BorderCountries = styled.div`
  width: 100%;
  ${FlexStartCenter};
  flex-wrap: wrap;

  div {
    margin-top: 10px;
    font-size: 1.25rem;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  @media (min-width: ${breakpoints.sm}) {
    ${FlexStartCenter};
    flex-wrap: wrap;
  }  
`

const BorderCountriesHeader = styled.span`
  width: 100%;
  user-select: none;
  font-weight: bold;

  @media (min-width: ${breakpoints.sm}) {
    width: initial;
    margin-top: 10px;
    margin-right: 20px;

    &:focus { outline: ${({ theme }) => theme.focusColor}; }
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
    if (data) {
      const country = data.find(country => country.numericCode === id)

      if (country) {
        setCountry(country)
        setBorderCountries(generateBorderCountries(country))
      }
    }
  }, [data, generateBorderCountries, id])

  if (!Object.keys(country).length) return null

  const renderCurrencies = () => currencies.map(cur => cur.code).join(', ')
  const renderLanguages = () => languages.map(lang => lang.name).join(', ')

  // Render a list of buttons linking to border countries
  const renderBorderCountries = () => {
    return Object.values(borderCountries).map(country => (
      <Button
        aria-label={`Click here to learn more about ${country.name}`}
        key={country.code}
        onClick={() => history.push(`/detail/${country.code}`)}
        onKeyDown={(e) => e.key === 'Enter' && history.push(`/detail/${country.code}`)}
        onMouseDown={(e) => e.preventDefault()}
        role='link'
        tabIndex='0'
      >
        {country.name}
      </Button>
    ))
  }

  return (
    <Container>
      <Button
        onClick={() => history.push('/')}
        onKeyDown={(e) => e.key === 'Enter' && history.push('/')}
        onMouseDown={(e) => e.preventDefault()}
        tabIndex='0'
        role='button'
      >
        <Icon />
        <span>Back</span>
      </Button>
      <CountryContainer>
        <FlagImageContainer aria-label={`${name} flag`} role='image' tabIndex='0' >
          <FlagImage src={flag} alt={`${name} flag`} />
        </FlagImageContainer>
        <DetailsContainer>
          <Name tabIndex='0'>{name}</Name>
          <Grid>
            <DataPair label='Native Name' tab>{nativeName}</DataPair>
            <DataPair label='Top Level Domain' tab>{topLevelDomain}</DataPair>
            <DataPair label='Population' tab>{numberWithCommas(population)}</DataPair>
            <DataPair label='Currencies' tab>{renderCurrencies()}</DataPair>
            <DataPair label='Region' tab>{region}</DataPair>
            <DataPair label='Languages' tab>{renderLanguages()}</DataPair>
            <DataPair label='Sub Region' tab>{subregion}</DataPair>
            <DataPair label='Capital' tab>{capital}</DataPair>
          </Grid>
          <BorderCountriesSection>
            {Object.values(borderCountries).length
              ? (<>
                  <BorderCountriesHeader role='heading' tabIndex='0'>Border Countries: </BorderCountriesHeader>
                  <BorderCountries>
                    {renderBorderCountries()}
                  </BorderCountries>
                </>
              ) : null}
          </BorderCountriesSection>
        </DetailsContainer>
      </CountryContainer>
    </Container>
  )
}

export default DetailPage

DetailPage.defaultProps = {
  data: []
}

DetailPage.propTypes = {
  data: PropTypes.array.isRequired,
}