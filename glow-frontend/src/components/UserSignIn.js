import React, { Component } from 'react';
import { API_ROOT, HEADERS } from '../constants';
import { connect } from 'react-redux';
import  { loadActiveUser,loadActiveConversation } from '../actions'

class UserSignIn extends Component {
    state ={
      text: "",
      signUp: ""
    }

    signUpUser = (event) =>{
      event.preventDefault();
      console.log("This is the username before fetch",this.state.signUp);
        fetch(`${API_ROOT}/users`,{
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({
                username: this.state.signUp
            })
        })
        .then(() =>
          {
            this.props.loadActiveUser(this.state.signUp)
          }
        )
        .then(() => {
          this.props.loadActiveConversation(this.props.aactiveUser.id, this.props.conversations)
        })
        .then(()=>           this.props.history.push("/glowchat/:id"))
    }

    makeUsername = (event) => {
      this.setState({signUp: event.target.value})
    }

    setUserName = (event) => {
      console.log(event.target.value);
      this.setState({text: event.target.value})

    }

    signInUser = (event) => {
      event.preventDefault();
      this.props.loadActiveUser(this.state.text)
      this.props.loadActiveConversation(this.props.activeUser.id, this.props.conversations)
      this.props.history.push("/glowchat/:id")
      this.setState({text: ""})
    }

    render(){
        return(
            <div>
              <h1> Welcome To Glow</h1>
              <br/><br/>
                <form onSubmit={this.signUpUser}>
                    <label> Sign Up:</label>
                      <input
                          value={this.state.signUp}
                          onChange={this.makeUsername}
                          type="text"
                      />
                    <input value="Sign up"type="submit" />
                </form>
              <br/><br/>
                <form onSubmit={this.signInUser}>
                    <label> Sign In:</label>
                    <input
                        value={this.state.text}
                        onChange={this.setUserName}
                        type="text"
                    />
                  <input  type="submit" />

                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  activeUser: state.activeUser,
  conversations: state.conversations
})

export default connect(mapStateToProps, {loadActiveUser,loadActiveConversation})(UserSignIn)
