import React, { Component } from 'react';
// import './App.css'; <-- commented out for styling
import ConversationsList from './components/ConversationsList';
import { connect } from 'react-redux'
import { loadConversations } from './actions'

class App extends Component {

  componentDidMount () {
    this.props.loadConversations()
  }

  render() {
    return (
      <div className="App">
        <ConversationsList />
      </div>
    );
  }
}

export default connect(null, { loadConversations })(App);
