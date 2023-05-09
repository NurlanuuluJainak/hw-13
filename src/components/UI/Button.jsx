import React from "react";
import styled from "styled-components";

export const Button = ({
   children,
   variant = "contained",
   boderRadius = 'rounded',
   ...restProps 
  }) => {
  return (
  <StyledButton 
  variant={variant}
  boderRadius={boderRadius} {...restProps}>
    {children}
    </StyledButton>);
};
const getBackground = () => {
  return (props) => (props.variant === "contained" ? "#7e2a0a" : "#fff");
};
const getBorder = () => {
  return (props) =>
    props.variant === "contained" ? "none" : "1px solid #8A2B06";
};
const getTextColor = () => {
  return (props) => (props.variant === "contained" ? "#FFF" : "#8A2B06");
};
const getBorderRadius = () => {
  return (props) => (props.boderRadius === "rounded" ? "20px" : "6px");
};
const getPadding = () => {
  return (props) => (props.boderRadius === "rounded" ? "10px 32px" : "8px 14px");
};

const StyledButton = styled.button`
  background-color: ${getBackground};
  border-radius: ${getBorderRadius};
  padding: ${getPadding};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  border: none;
  line-height: 24px;
  border: ${getBorder};
  color: ${getTextColor};
  display: flex;
  align-items: center;
  :hover {
    background-color: #5a1f08;
    color: #fff;
  }
  :active {
    background-color: #993108;
  }
`;
