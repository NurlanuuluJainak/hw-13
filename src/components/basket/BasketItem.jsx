import React, { useContext } from 'react'
import { Button } from '../UI/Button'
import styled from 'styled-components'
import { BasketContext } from '../../store/BasketContext'


export const BasketItem = ({title,price,amount,id}) => {
 const {increment,decrement} = useContext(BasketContext)
  return (
    <Container>
        <Title>{title}</Title>
        <Content>
          <PriceAndAmountContainer>
            <Pcise>${price}</Pcise>
            <Amount>x {amount}</Amount>
          </PriceAndAmountContainer>
          <CounterContainer>
            <Button boderRadius='sqaured'   variant='outlined'onClick={() => decrement(id)} >-</Button>
            <Button boderRadius='sqaured' variant='outlined' onClick={() => increment(id)}>+</Button>
          </CounterContainer>
        </Content>
    </Container>
  )
}

const Container = styled.div`
  padding: 24px 0;
  width: 100%;
  border-bottom: 2px solid #993108;
`

const Title = styled.p`
  font-weight: 600;
font-size: 20px;
line-height: 30px;
color: #222222;
margin: 0 0 12px 0;
`
const Pcise = styled.p`
  font-weight: 600;
font-size: 18px;
line-height: 27px;
margin: 0;
color: #AD5502;
`
const Amount = styled.span`
  font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #222222;
border: 1px solid #d6d6d6;
border-radius: 6px;
padding: 6px 14px;
display: block;
`
const PriceAndAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 153px;
`
const CounterContainer = styled.div`
display: flex;
gap: 14px;
  
`
const Content = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding-right:10px;
`