import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { numberWithCommas } from '../Utils/format'
import DataPair from './DataPair'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background: ${({ theme }) => theme.elementBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media (min-width: 576px) {
    margin-bottom: 0;
    transition: transform .15s ease-in;

    &:hover {
      cursor: pointer;
      transform: translateY(-5%);
    }
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
  border-radius: 5px 5px 0 0;
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

const CountryCard = ({ data: { capital, flag, name, numericCode, population, region  } }) => {
  const history = useHistory()

  return (
    <CardContainer onClick={() => history.push(`/detail/${numericCode}`)}>
      <FlagImageContainer>
        <FlagImage src={flag} alt={`${name} flag`} />
      </FlagImageContainer>
      <CountryStats>
        <CountryName>{name}</CountryName>
        <DataPair label='Population'>{numberWithCommas(population)}</DataPair>
        <DataPair label='Region'>{region}</DataPair>
        <DataPair label='Capital'>{capital}</DataPair>
      </CountryStats>
    </CardContainer>
  )
}

export default CountryCard