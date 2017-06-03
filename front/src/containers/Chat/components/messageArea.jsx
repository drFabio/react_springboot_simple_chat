import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Message} from './message'
import styled from 'styled-components'
const Container = styled.div`
  font-family: 'Julius Sans One', sans-serif;
`
export class MessageArea extends Component {
  static propTypes = {
    messages: PropTypes.array
  }
  static defaultProps = {
    messages: []
  }
  render () {
    let index = 0
    return (
      <Container>
        {this.props.messages.map((message) => {
          const key = `message_${index++}`
          const {body, ...other} = message
          return (
            <Message key={key} {...other}>
              {body}
            </Message>
          )
        })}
      </Container>
    )
  }
}
