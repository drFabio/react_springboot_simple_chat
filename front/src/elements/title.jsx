import React, {Component} from 'react'
import styled from 'styled-components'
import cssVars from 'cssVars'
const TitleContainer = styled.h1`
  text-align: center;
  color: ${cssVars['titleColor']};
  font-size: 2rem;
  margin: 0.3rem 0;
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
