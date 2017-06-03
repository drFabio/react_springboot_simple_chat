import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
const SenderName = styled.span`
  font-weight: bold;
  margin-right: 1rem;
  &::after {
    content: " - ";
  }
`
export class Message extends Component {
  static propTypes = {
    senderName: PropTypes.string,
    isJoin: PropTypes.bool,
    isLeft: PropTypes.bool
  }
  render () {
    let senderElement = null
    if (this.props.senderName) {
      senderElement = (
        <SenderName>
          {this.props.senderName}
        </SenderName>
      )
    }
    return (
      <div>
        {senderElement}
        {this.props.children}
      </div>
    )
  }
}
export default Message
