import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 35px;
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
  flex-basis: 60%;
  padding: 20px 25px 50px;
`

const CountryCard = ({ data }) => {
  return (
    <CardContainer>
      <FlagImageContainer>
        <FlagImage src={data.flag} alt={`${data.name} flag`} />
      </FlagImageContainer>
      <CountryStats />
    </CardContainer>
  )
}

export default CountryCard