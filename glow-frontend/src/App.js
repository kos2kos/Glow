import React, { Component } from 'react';
// import './App.css'; <-- commented out for styling
import ConversationsList from './components/ConversationsList';
import { connect } from 'react-redux'
import { loadConversations } from './actions'
import UserSignIn from './components/UserSignIn'
import LeaderBoard from './components/LeaderBoard'

class App extends Component {

  componentDidMount () {
    this.props.loadConversations()
  }

  render() {
    return (
      <div className="App">
        <LeaderBoard />
        <UserSignIn />
        <ConversationsList />

      </div>
    );
  }
}

export default connect(null, { loadConversations })(App);
