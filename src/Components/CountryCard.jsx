import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
// components
import DataPair from './DataPair'
// utils
import { numberWithCommas } from '../Utils/format'

/* Styles Begin */

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
    transition: transform .15s ease-in;

    &:not(:last-child) {
      margin-bottom: 0rem;
    }

    &:focus {
      border: 1px solid #ffffff8c;
      outline: none;
    }

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
  width: calc(100% - 20px);
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 50px;
`

const CountryName = styled.h3`
  margin-bottom: 10px;
  margin-top: 0;
`
/* Styles End */

const CountryCard = ({ data: { capital, flag, name, numericCode, population, region  } }) => {
  const history = useHistory()

  const handleOnKeyDown = (e) => {
    e.preventDefault()

    // "enter" key, open detail page
    if (e.keyCode === 13) {
      history.push(`/detail/${numericCode}`)
    }
  }

  return (
    <CardContainer onClick={() => history.push(`/detail/${numericCode}`)} onKeyDown={handleOnKeyDown} tabIndex='0' >
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