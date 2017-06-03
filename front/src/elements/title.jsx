import React, {Component} from 'react'
import styled from 'styled-components'

const TitleContainer = styled.h1`
  text-align: center
`
export class Title extends Component {
  render () {
    const {children, ...other} = this.props
    return (
      <TitleContainer {...other}>
        {children}
      </TitleContainer>
    )
  }
}
export default Title
