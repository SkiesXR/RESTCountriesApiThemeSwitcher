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

const DetailPage = ({ data }) => {
  const history = useHistory()
  const { id } = useParams()
  const country = data.find(country => country.numericCode === id)

  return (
    <Container>
      <Button onClick={() => history.push('/')}>
        <Icon />
        <span>Back</span>
      </Button>
      <img src={country.flag} alt={`${country.name} flag`}/>
    </Container>
  )
}

export default DetailPage