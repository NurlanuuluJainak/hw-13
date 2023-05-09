import React from "react";
import styled from "styled-components";

export const MealsButton = ({ children }) => {
  return (
    <ButtonsMeals>
      <MealsSpan>+</MealsSpan>
      <span id="countSan">Add</span>
    </ButtonsMeals>
  );
};

const ButtonsMeals = styled.button`
  background: #8a2b06;
  border: none;
  font-weight: 700;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  line-height: 21px;
  color: #ffffff;
  border-radius: 20px;
  padding: 8px 30px 8px 26px;
  :hover {
    background-color: #2c0d00;
  }
`;
const MealsSpan = styled.span`
  margin-right: 10px;
  font-size: 1.3rem;
  font-weight: 500;
`;
