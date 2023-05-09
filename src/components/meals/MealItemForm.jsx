import React, { useReducer } from 'react'
import styled from 'styled-components'
import { MealsButton } from './MealsButton'
import { useState } from 'react'
import { useContext } from 'react'
import { BasketContext } from '../../store/BasketContext'

export const MealItemForm = ({id,title,price}) => {
  const [amount,setAmount] = useState(1)

  const {addToBasket} = useContext(BasketContext)

  const chengeAmoutHandler = (event) => {
  setAmount(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const basketItem = {
        id,
        price,
        title,
        amount:+amount
    }
    addToBasket(basketItem)
  }
  return (
    <MealsForm onSubmit={submitHandler}>
    <MealsInputLable>
      <label htmlFor={id}>Amount</label>
      <input value={amount} onChange={chengeAmoutHandler} id='inputs_m' type="number" min="1" max="10"  />
    </MealsInputLable>
    <Buttons>
   <MealsButton/>
    </Buttons>
  </MealsForm>
  )
}
const MealsInputLable = styled.div`
      align-items: center;
    display: flex;
    margin-bottom: 0.5rem;
    label{
      font-weight: 700;
    margin-right: 1rem;
    }
    input{
      border: 1px solid #ccc;
    border-radius: 5px;
    font: inherit;
    padding-left: 0.5rem;
    width: 3rem;
    }
`
const Buttons = styled.div`
 margin-left: 40px;
`
const MealsForm = styled.form`
  text-align: left;
  margin-top:12px;
  
`