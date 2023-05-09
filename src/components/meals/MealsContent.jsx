import React from 'react'
import styled from 'styled-components'
import { MealItemForm } from './MealItemForm'
export const MealsContent = ({title,price,description,id}) => {


  return (
    <div>
            <MealsItem>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
              <MealsSpan>${price}</MealsSpan>
            </div>
            <MealItemForm id={id} price={price} title={title}/>
          </MealsItem>
    </div>
  )
}


const MealsItem = styled.li`
      border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    padding-bottom: 1rem;
    line-height:15px;
    p{
      font-style: italic;
    }
  h3{
    font-weight: 600;
font-size: 18px;
  }
`
const MealsSpan = styled.span`
    color: #ad5502;
    font-size: 1.25rem;
    font-weight: 700;
    margin-top: 0.25rem;
`