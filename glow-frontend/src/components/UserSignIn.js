import React, { Component } from 'react';
import { API_ROOT, HEADERS } from '../constants';
import { connect } from 'react-redux';
import  {   loadActiveUser  } from '../actions'

class UserSignIn extends Component {
    state ={
      text: ""
    }

    signUpUser = (event) =>{
        fetch(`${API_ROOT}/users`,{
            method: 'POST',
            headers: {
                HEADERS
            },
            body: JSON.stringify({
                username: event.target.value
            })
        })
        .then(res => res.json())
    }

    setUserName = (event) => {
      console.log(event.target.value);
      this.setState({text: event.target.value})
    }

    signInUser = (event) => {
        event.preventDefault();
      this.props.loadActiveUser(this.state.text)
    }

    render(){
        return(
            <div>
              <br/><br/>
                <form onSubmit={this.signInUser}>
                    <label> Sign Up:</label>
                      <input
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
export default connect(null, {loadActiveUser})(UserSignIn)
