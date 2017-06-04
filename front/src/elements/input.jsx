import React, {Component} from 'react'
import styled from 'styled-components'
import cssVars from 'cssVars'

const StyledInput = styled.input`
  background-color: inherit;
  display: block;
  width: 100%;
  border: 0;
  font-size: 1.3rem;
  color: black;
  border-bottom: 2px solid ${cssVars.inputBorderColor};
  margin-bottom: 0.5em;
  padding-bottom: 0.5em;
  font-family: 'Julius Sans One', sans-serif;
  &:focus {
    outline: none;
    border-bottom: 2px solid ${cssVars.inputBorderColorFocusColor};
  }
  &:disabled {
    border-bottom: 2px solid ${cssVars.inputBorderDisabledColor};
    background-color: inherit;
  }
`
export class Input extends Component {
  render () {
    const {children, ...other} = this.props
    return (
      <StyledInput {...other}>
        {children}
      </StyledInput>
    )
  }
}
export default Input
