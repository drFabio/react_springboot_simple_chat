import React, {Component} from 'react'
import {Button} from 'elements'
export class SendMessageButton extends Component {
  render () {
    return (
      <Button
        onClick={this.props.onClick}
        className={this.props.className}
      >
        Send
      </Button>
    )
  }
}
export default SendMessageButton
