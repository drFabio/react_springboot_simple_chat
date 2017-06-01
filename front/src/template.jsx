import React, {Component} from 'react'

export class Template extends Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
