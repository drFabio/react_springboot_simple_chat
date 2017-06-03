import React, {Component} from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  height: 100%;
`
export class Page extends Component {
  render () {
    const {children, ...other} = this.props
    return (
      <PageContainer {...other}>
        {children}
      </PageContainer>
    )
  }
}
export default Page
