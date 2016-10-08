import React, {Component, PropTypes} from 'react'
import Header from './partials/Header'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )

  }
}

App.propTypes = {
  children: PropTypes.any
}
