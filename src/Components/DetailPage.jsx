import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as BackArrow } from '../Assets/Images/arrow_back.svg'

const Container = styled.div`
  background: ${({ theme }) => theme.bodyBackground};
  padding: 0 35px;
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

const DetailPage = ({ theme }) => {
  const history = useHistory()

  return (
    <Container theme={theme}>
      <Button onClick={() => history.push('/')}>
        <Icon />
        <span>Back</span>
      </Button>
    </Container>
  )
}

export default DetailPage