import React, {Component} from 'react'
import styled from 'styled-components'
import cssVars from 'cssVars'

const Error = styled.p`
  color: ${cssVars.errorColor};
  font-weight: bold;
`
export class ErrorMessage extends Component {
  render () {
    return (
      <Error>
        {this.props.children}
      </Error>
    )
  }
}
export default ErrorMessage
