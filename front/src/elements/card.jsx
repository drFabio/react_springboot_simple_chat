import React, {Component} from 'react'
import styled from 'styled-components'
import cssVars from 'cssVars'
const Container = styled.div`
  width: 100%;
  text-align: center;
  height: auto;
  position: relative;
  padding: 1rem 0.5rem;
  box-shadow: 0 2px 4px -2px ${cssVars.shadowColor};
`
export class Card extends Component {
  render () {
    const {children, ...other} = this.props
    return (
      <Container {...other}>
        {children}
      </Container>
    )
  }
}
export default Card
