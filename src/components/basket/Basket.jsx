import styled from "styled-components";
import { Modal } from "../UI/Modal";
import { NewModalTotal } from "./NewModalTotal";
import { BasketItem } from "./BasketItem";
import { useContext } from "react";
import { BasketContext } from "../../store/BasketContext";


export const Basket = ({onClose}) => {
  const {itemsMenu} = useContext(BasketContext)

  const getTotalPrice = () => {
   return itemsMenu.reduce((summa, {price,amount} ) =>(summa+(amount * price)), 0)
  }
  return (
    <Modal onClose={() => {}}>
      <Content>
     {itemsMenu.length ? (<FixedContainer>
            {itemsMenu.map((item) => {
          return (
            <BasketItem
            id={item.id}
             title={item.title}
            price={item.price} 
            amount={item.amount}/>
          )
        })}
    </FixedContainer>):null}
        <NewModalTotal 
        price={getTotalPrice()} 
        onClose={onClose} 
        onOrder={() => {}} />
      </Content>
    </Modal>
  );
};

const Content = styled.div`
  width: 100%;
  height: 100%;
`;
const FixedContainer = styled.div`
    max-height: 228px;
    overflow-y:scroll;
    margin-bottom:25px;
`