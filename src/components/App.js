import React, { Component } from 'react'
import UserContainer from '../containers/UserContainer.js'
import PageContainer from '../containers/PageContainer'

class App extends Component {
  render() {
    return (
      <div className="app">
        <PageContainer />
        <UserContainer />
      </div>
    )
  }
}

export default App
