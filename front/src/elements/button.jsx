import React, {Component} from 'react'
import styled from 'styled-components'
import cssVars from 'cssVars'

const StyledButton = styled.button`
  border: 0;
  border-radius: 5px;
  background-color: ${cssVars['buttonBgColor']};
  color: ${cssVars['buttonColor']};
  font-size: 1rem;
  padding: 0.5em;
  &:hover {
    color: ${cssVars['buttonColorHover']};
    cursor: pointer;
    background-color: ${cssVars['buttonBgColorHover']};
  }
  &:active,&:hover:active{
    background-color: ${cssVars['buttonBgColorPressed']};
  }
  &:disabled,&:hover:disabled{
    cursor: auto;
    background-color: ${cssVars['buttonBgColorDisabled']};
  }
`
export class Button extends Component {
  render () {
    const {children, ...other} = this.props
    return (
      <StyledButton {...other}>
        {children}
      </StyledButton>
    )
  }
}
export default Button
