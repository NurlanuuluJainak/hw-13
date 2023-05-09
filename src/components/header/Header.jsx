import React from "react";
import styled from "styled-components";
import { BasketButton } from "./BasketButton";
import { useContext } from "react";
import { BasketContext } from "../../store/BasketContext";
import { useState } from "react";
import { useEffect } from "react";
export const Header = ({ onBasket }) => {
  const { itemsMenu } = useContext(BasketContext);

  const [basketClassName,setBasketClassName] = useState('')

  const calculateTotalAmount = () => {
    const sumItems = itemsMenu.reduce((s, item) => {
      return s + item.amount;
    }, 0);
    return sumItems;
  };

  useEffect(() => {
setBasketClassName("bump")
const id  = setTimeout(() => {
  setBasketClassName('')
},400);

return () => {
  clearTimeout(id)
}
  },[itemsMenu])

  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BasketButton
        className={basketClassName}
        onClick={onBasket}
        count={calculateTotalAmount()}
      />
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  height: 80px;
  background-color: #8a2b06;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffff;
  margin: 0;
`;
