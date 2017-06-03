import React, {Component} from 'react'

export class SendMessageButton extends Component {
  render () {
    return (
      <button onClick={this.props.onClick}>
        Send
      </button>
    )
  }
}
export default SendMessageButton
