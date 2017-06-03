import React, {Component} from 'react'
import styled from 'styled-components'
import cssVars from 'cssVars'
const TitleContainer = styled.h1`
  text-align: center;
  color: ${cssVars['titleColor']};
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
