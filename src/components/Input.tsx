import React from 'react'
import styled from 'styled-components';

const StyledContainer = styled('div')``
    
const StyledInput = styled('input')``
interface InputProps {
    placeholder?: string,
}

const Input = (props:InputProps) => {
  return (
    <StyledContainer>
        <StyledInput placeholder={props.placeholder}/>
    </StyledContainer>
  )
}

export default Input