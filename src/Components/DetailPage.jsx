import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as BackArrow } from '../Assets/Images/arrow_back.svg'

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
  width: 85px;
  padding: 7px 15px;
  border-radius: 5px;
  background: ${({ theme }) => theme.elementBackground};

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
  padding: 25px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
`

const CountryName = styled.h2`
  display: block;
`

const CountryStat = styled.span`

`

const BorderCountriesSection = styled.div`

`

const BorderText = styled.span`

`

const DetailPage = ({ data }) => {
  const history = useHistory()
  const { id } = useParams()
  const country = data.find(country => country.numericCode === id)
  const { capital, currencies, flag, languages, name, nativeName, population, region, subregion, topLevelDomain } = country
  // console.log(country)
  if (!data || !data?.length ) return null

  const renderCurrencies = () => currencies.map(cur => cur.code).join(', ')
  const renderLanguages = () => languages.map(lang => lang.name).join(', ')
  const renderBorderCountries = () => null // TODO: add logic

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
          <CountryName>{name}</CountryName>
          <CountryStat>{nativeName}</CountryStat>
          <CountryStat>{topLevelDomain}</CountryStat>
          <CountryStat>{population}</CountryStat>
          <CountryStat>{renderCurrencies()}</CountryStat>
          <CountryStat>{region}</CountryStat>
          <CountryStat>{renderLanguages()}</CountryStat>
          <CountryStat>{subregion}</CountryStat>
          <CountryStat>{capital}</CountryStat>
          <BorderCountriesSection>
            <BorderText>BorderCountries: </BorderText>
            {renderBorderCountries()}
          </BorderCountriesSection>
        </DetailsContainer>
      </CountryContainer>
    </Container>
  )
}

export default DetailPage