import styled from "styled-components";
import "./App.css";
import { Basket } from "./components/basket/Basket";
import { Header } from "./components/header/Header";
import { Meals } from "./components/meals/Meals";
import { Summary } from "./components/summary/Summary";
import { useState } from "react";
import { BasketProvider } from "./store/BasketContext";

function App() {
  const [isBasket,setBasket] = useState(false)
   
  const basketHandler = () => {
   setBasket(prev => !prev )
  }
  return (
    <BasketProvider>

      <Header onBasket={basketHandler} />
      <Content>
        <Summary />
        <Meals />
        {isBasket && <Basket onClose={basketHandler} />}
      </Content>
    </BasketProvider>
  );
}

export default App;

const Content = styled.div`
  margin-top: 101px;
`;
