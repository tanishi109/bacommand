import React, { Component, PropTypes } from "react"
import { Route, Router } from "react-router"

import Index from "./app/Index"

export default class Root extends Component {
  render() {
    const { history } = this.props
    return (
      <Router history={history}>
        <Route path="/" component={Index} />
      </Router>
    )
  }
}