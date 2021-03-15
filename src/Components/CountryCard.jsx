import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background: ${({ theme }) => theme.elementBackground};
  box-shadow: ${({ theme }) => theme.name === 'Light'
    ? '0px 10px 13px -7px #e8e8e8, 5px 5px 15px 5px rgba(0,0,0,0)'
    : '0px 10px 13px -12px #232323, 5px 5px 15px 5px rgba(0,0,0,0)'};
  &:hover {
    cursor: pointer;
  }
`

const FlagImageContainer = styled.div`
  width: 100%;
  flex-basis: 40%;
`

const FlagImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const CountryStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-basis: 60%;
  width: 100%;
  margin-left: 40px;
  margin-top: 20px;
  margin-bottom: 50px;
`

const CountryName = styled.h3`
  margin-bottom: 10px;
  margin-top: 0;
`

const CountryStat = styled.span`
  line-height: 1.75rem;
`

const CountryCard = ({ data, theme }) => {
  const history = useHistory()

  return (
    <CardContainer theme={theme} onClick={() => history.push(`/detail/${data.numericCode}`)}>
      <FlagImageContainer>
        <FlagImage src={data.flag} alt={`${data.name} flag`} />
      </FlagImageContainer>
      <CountryStats>
        <CountryName>{data.name}</CountryName>
        <CountryStat><b>Population: </b>{data.population}</CountryStat>
        <CountryStat><b>Region: </b>{data.region}</CountryStat>
        <CountryStat><b>Capital: </b>{data.capital}</CountryStat>
      </CountryStats>
    </CardContainer>
  )
}

export default CountryCard