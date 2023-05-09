import styled from "styled-components";
import { Button } from "../UI/Button";

export const NewModalTotal = ({ price, onClose, onOrder }) => {
  const isOrderButton = price > 0 ? <Button onClick={onOrder}>Order</Button> : null;
  const  priceFixed = price.toFixed(2)
  return (
    <InfoContainer>
      <TotalInfoContainer>
        <TotalText>Total amount</TotalText>
        <TotalPrice>$ {priceFixed}</TotalPrice>
      </TotalInfoContainer>
      <ActionButtonContainer>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        {isOrderButton}
      </ActionButtonContainer>
    </InfoContainer>
  );
};
const ActionButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;
const InfoContainer = styled.div`
  margin-top:25px;
`
const TotalInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TotalText = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #222222;
  margin: 0;
`;
const TotalPrice = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #8a2b06;
  margin: 0;
`;
