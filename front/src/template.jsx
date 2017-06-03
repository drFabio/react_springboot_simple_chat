import React, {Component} from 'react'
import {Page} from 'elements'
export class Template extends Component {
  render () {
    return (
      <Page>
        {this.props.children}
      </Page>
    )
  }
}
