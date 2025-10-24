import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  color: #fff;
  background-color: ${({ theme }) => theme.colors.company};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`

const Button = ({ children }) => <StyledButton>{children}</StyledButton>

export default Button
