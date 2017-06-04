import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import getUserColorByName from 'utils/getUserColorByName'
const SenderName = styled.span`
  font-weight: bold;
  margin-right: 1rem;
  &::after {
    content: " - ";
  }
`
const Container = styled.div`
  border-radius: 10px;
  padding: 0.2rem 0.4rem;
  font-size: 1.2rem;
  border-color: currentColor;
  border-width: 2px;
  border-style: solid;
  margin-bottom: 0.2rem;
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
    let color = 'teal'
    if (this.props.senderName) {
      color = getUserColorByName(this.props.senderName)
    }
    return (
      <Container style={{color}}>
        {senderElement}
        {this.props.children}
      </Container>
    )
  }
}
export default Message
