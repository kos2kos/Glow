import React, { Component } from 'react';
// import './App.css'; <-- commented out for styling
import ConversationsList from './components/ConversationsList';
import { connect } from 'react-redux'
import { loadConversations } from './actions'
import UserSignIn from './components/UserSignIn'
import LeaderBoard from './components/LeaderBoard'
import ProfileCard from './components/ProfileCard'
import { Route, NavLink, Switch, withRouter } from 'react-router-dom'

class App extends Component {

  componentDidMount () {
    this.props.loadConversations()
  }

  render() {
    return (
      <div className="App">

        <NavLink to="/user/leaderboard"> LeaderBoard</NavLink>
        <NavLink to="/home"> Sign In</NavLink>
        <NavLink to="/user/profile"> Profile </NavLink>
        <NavLink to="/glowchat/:id">  Glow Chat </NavLink>

      <Switch>
        <Route path="/user/leaderboard" component={LeaderBoard}/>
        <Route path="/home" render={(routeProps)=><UserSignIn {...routeProps}/>}/>
        <Route path="/user/profile" component={ProfileCard}/>
        <Route path="/glowchat/:id" render={(routeProps)=><ConversationsList {...routeProps}/>}
          />
      </Switch>
      </div>

    );
  }
}

export default withRouter(connect(null, { loadConversations })(App));
