import React, {Component} from 'react'
import {Input} from 'elements'
import styled from 'styled-components'
const StyledInput = styled(Input)`
  margin-bottom: 0;
`
export class MessageInput extends Component {
  render () {
    return (
      <StyledInput
        value={this.props.value}
        onChange={this.props.onChange}
        className={this.props.className}
        placeholder={'Message ...'}
      />
    )
  }
}
export default MessageInput
