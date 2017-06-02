import React, {Component} from 'react'

export class ErrorMessage extends Component {
  render () {
    return (
      <p>
        {this.props.children}
      </p>
    )
  }
}
export default ErrorMessage
