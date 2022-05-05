import React from "react";
import styled from "styled-components";

const StyledWrapper = styled("div")``;
const StyledButton = styled("button")``;
type Props = {
  label: string;
  onClick: any;
};

const Button = (props: Props) => {
  return (
    <StyledWrapper>
      <StyledButton onClick={props.onClick}>{props.label}</StyledButton>
    </StyledWrapper>
  );
};

export default Button;
