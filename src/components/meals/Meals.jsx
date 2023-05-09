import React from 'react'
import styled from 'styled-components'
import { MealsContent } from './MealsContent'

const DUMMY_MEALS = [
  {
    id:'meal1',
    title:"Sushi",
    description:"Finest fish and veggies",
    price:22.99,
  },
  {
    id:'meal2',
    title:"Schnitzel",
    description:"A german specialty!",
    price:16.99,
  },
   {
    id:'meal3',
    title:"Barbecue Burger",
    description:"American, raw, meaty",
    price:12.99,
  },
  {
    id:'meal4',
    title:"Green Bowl",
    description:"Healthy...and green..",
    price:19.99,
  },
]
export const Meals = () => {
  return (
    <MealsContainer>
     <MealsCard>
      <MealsMenu>
     {DUMMY_MEALS.map((el) => (
     <MealsContent 
     title={el.title} 
     price={el.price}  
     description={el.description} 
     id={el.id}/>))}
      </MealsMenu>
     </MealsCard>
    </MealsContainer>
  )
}



const MealsContainer = styled.div`
    margin: 2rem auto;
    max-width: 60rem;
    width: 90%;
    margin-top:70px;
`


const MealsMenu = styled.ul`
  list-style: none;
    margin: 0;
    padding: 0;
`

const MealsCard = styled.div`
      background-color: #fff;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(0,0,0,.25);
    padding: 1rem;
`