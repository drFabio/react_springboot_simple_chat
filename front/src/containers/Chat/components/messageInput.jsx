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
        placeholder={'Message ...'}
        {...this.props}
      />
    )
  }
}
export default MessageInput
