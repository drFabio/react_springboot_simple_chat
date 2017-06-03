import React, {Component} from 'react'
import {Input} from 'elements'
export class MessageInput extends Component {
  render () {
    return (
      <Input
        value={this.props.value}
        onChange={this.props.onChange}
        className={this.props.className}
        placeholder={'Message ...'}
      />
    )
  }
}
export default MessageInput
