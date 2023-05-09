import React from 'react'
import styled from 'styled-components'

export const SummaryCard = () => {
  return (
    <CardSummary>
        <CardChildren>
     <h3>Delicious Food, Delivered To You</h3>
     <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious
lunch or dinner at home.</p>
<p>All our meals are cooked with high-quality ingredients, just-in-time and of course by
 experienced chefs!</p>
        </CardChildren>
    </CardSummary>
  )
}

const CardSummary = styled.div`
    background-color: #383838;
    border-radius: 14px;
    box-shadow: 0 1px 25px 10px rgba(0,0,0,.25);
    color: #fff;
    margin: -12rem  auto;
    max-width: 45rem;
    padding: 1rem 2.3rem;
    p{
        padding-bottom:1rem;
    }
    position: relative;
    z-index:5;
    text-align: center;
    width: 100%;
`

const CardChildren = styled.div`
     max-width: 754px;
     margin: 0 auto;
     width: 100%;
     h3{
 font-weight: 600;
font-size: 36px;
color: #fff;
line-height: 54px;
}
p{
font-weight: 500;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #FFFFFF;
margin-bottom:0px;

}
`