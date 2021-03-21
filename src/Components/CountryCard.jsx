import React from 'react'
import PropTypes from 'prop-types' 
import { useHistory } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
// components
import DataPair from './DataPair'
// utils
import { numberWithCommas } from '../Utils/format'
import { breakpoints, FlexColCenter, FlexColStart } from './Mixins.js'

/* Styles Begin */

const FadeUp = keyframes`
  from { opacity: 0; transform: translateY(10%); };
  to { opacity: 1; transform: translateY(0%); };
`

const CardContainer = styled.div`
  ${FlexColCenter};
  border-radius: var(--borderRadius);
  background: ${({ theme }) => theme.elementBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  animation: ${FadeUp} .25s ease-in;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media (min-width: ${breakpoints.sm}) {
    transition: transform .15s ease-in;

    &:not(:last-child) {
      margin-bottom: 0rem;
    }

    &:focus {
      outline: ${({ theme }) => theme.focusColor};
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
  border-radius: var(--borderRadius) var(--borderRadius) 0 0;
`

const CountryStats = styled.div`
  ${FlexColStart};
  width: calc(100% - 20px);
  flex-basis: 60%;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 50px;
  font-size: 1.25rem;
  
  @media (min-width: ${breakpoints.sm}) {
    font-size: 1rem;
  }
`

const CountryName = styled.h3`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.75rem;

  @media (min-width: ${breakpoints.sm}) {
    font-size: 1.5rem;
  }
`
/* Styles End */

const CountryCard = ({ data: { capital, flag, name, numericCode, population, region  } }) => {
  const history = useHistory()

  const handleOnKeyDown = (e) => {
    // allow tab key default behavior for navigation
    e.keyCode !== 9 && e.preventDefault()

    // "enter" key, open detail page
    if (e.keyCode === 13) {
      history.push(`/detail/${numericCode}`)
    }
  }

  return (
    <CardContainer
      aria-label={`${name} country card`}
      onClick={() => history.push(`/detail/${numericCode}`)}
      onKeyDown={handleOnKeyDown}
      onMouseDown={(e) => e.preventDefault()}
      role='cell'
      tabIndex='0'
    >
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

CountryCard.propTypes = {
  data: PropTypes.object.isRequired
}