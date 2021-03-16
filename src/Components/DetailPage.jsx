import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as BackArrow } from '../Assets/Images/arrow_back.svg'
import { numberWithCommas } from '../Utils/format'

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

  &:hover {
    cursor: pointer;
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
`

const Detail = styled.span`

`

const BorderCountriesSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  div {
    margin-top: 10px;
    font-size: .8rem;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`

const BorderText = styled.span`
  margin-right: 20px;
`

const DetailPage = ({ data }) => {
  const history = useHistory()
  const { id } = useParams()
  const [country, setCountry] = useState({})
  const [borderCountries, setBorderCountries] = useState({})
  const { capital, currencies, flag, languages, name, nativeName, population, region, subregion, topLevelDomain } = country
  console.log(borderCountries)

  useEffect(() => {
    const country = data.find(country => country.numericCode === id)
    if (country) {
      setCountry(country)
      setBorderCountries(generateBorderCountries(country))
    }
  }, [data, id])

  // Build a collection of border countries
  // Shape = { countryName: { name: countryName, code: numericCode } }
  const generateBorderCountries = (country) => {
    const borderCodes = Object.values(country.borders)

    return borderCodes.reduce((acc, border) => {
      const borderedCountry = data.find(country => country.alpha3Code === border)
      return borderedCountry
        ? { ...acc, [borderedCountry.name]: { name: borderedCountry.name, code: borderedCountry.numericCode } }
        : acc
    }, {})
  }

  if (!Object.keys(country).length) return null

  const renderCurrencies = () => currencies.map(cur => cur.code).join(', ')
  const renderLanguages = () => languages.map(lang => lang.name).join(', ')

  // Render a list of buttons linking to border countries
  const renderBorderCountries = () => Object.values(borderCountries).map(country => (
    <Button key={country.code} onClick={() => history.push(`/detail/${country.code}`)}>
      {country.name}
    </Button>)
  )

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
          <Detail><b>Native Name: </b>{nativeName}</Detail>
          <Detail><b>Top Level Domain: </b>{topLevelDomain}</Detail>
          <Detail><b>Population: </b>{numberWithCommas(population)}</Detail>
          <Detail><b>Currencies: </b>{renderCurrencies()}</Detail>
          <Detail><b>Region: </b>{region}</Detail>
          <Detail><b>Languages: </b>{renderLanguages()}</Detail>
          <Detail><b>Sub Region: </b>{subregion}</Detail>
          <Detail><b>Capital: </b>{capital}</Detail>
          <BorderCountriesSection>
            <BorderText><b>BorderCountries:</b> </BorderText>
            {renderBorderCountries()}
          </BorderCountriesSection>
        </DetailsContainer>
      </CountryContainer>
    </Container>
  )
}

export default DetailPage