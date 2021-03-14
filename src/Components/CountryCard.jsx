import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 10px 13px -7px #e8e8e8, 5px 5px 15px 5px rgba(0,0,0,0);
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

const CountryCard = ({ data }) => {
  return (
    <CardContainer>
      <FlagImageContainer>
        <FlagImage src={data.flag} alt={`${data.name} flag`} />
      </FlagImageContainer>
      <CountryStats>
        <span>{data.name}</span>
        <span>Population: {data.population}</span>
        <span>Region: {data.region}</span>
        <span>Capital: {data.capital}</span>
      </CountryStats>
    </CardContainer>
  )
}

export default CountryCard