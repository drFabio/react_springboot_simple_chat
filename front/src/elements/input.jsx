import React, {Component} from 'react'
import styled from 'styled-components'
import cssVars from 'cssVars'

const StyledInput = styled.input`
  display: block;
  width: 100%;
  border: 0;
  font-size: 1rem;
  color: black;
  border-bottom: 2px solid ${cssVars.inputBorderColor};
  margin-bottom: 0.5em;
  padding-bottom: 0.5em;
  &:focus {
    outline: none;
    border-bottom: 2px solid ${cssVars.inputBorderColorFocusColor};
  }
  &:disabled {
    border-bottom: 2px solid ${cssVars.inputBorderDisabledColor};
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
