import styled from 'styled-components'
import {ReactComponent as IconBasket} from '../../papkaImgicon/icons/icon-basket.svg'

export const BasketButton = ({count,...resProps}) => {
  return (
    <StyledButton {...resProps} >
        <IconBasket/> 
    <TitleStyled>Your cart </TitleStyled>
    <StyledCount id='countSan'>{count || 0}</StyledCount>
    </StyledButton>
  )
}

const StyledButton = styled.button`
    background-color: #5a1f08;
    border-radius: 30px;
    padding: 12px 32px;
    font-weight:600;
    line-height:24px;
    display: flex;
    align-items: center;
    font-size:16px;
    cursor: pointer;
    border: none;
    color: #fff;

    :hover{
        background-color: #2c0d00;
    }
    :hover > #countSan{
        background-color: #585251;
    }

    &.bump{
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0%{
      transform: scale(1);
    }
    10%{
      transform: scale(0.9);
    }
    30%{
      transform: scale(1.1);
    }
    50%{
      transform: scale(1.15);
    }
   100%{
      transform: scale(1);
    }
  }

`
const StyledCount = styled.span`
background: #8A2B06;
border-radius: 30px;
padding: 4px 20px;
font-weight: 700;
font-size: 20px;
line-height: 27px;
color: #FFFFFF;

`

const TitleStyled = styled.span`
    margin-left: 12px;
    margin-right: 24px;
`