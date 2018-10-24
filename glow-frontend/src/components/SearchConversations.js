import React, { Component } from 'react'
import SearchList from './SearchList'
import { API_ROOT } from '../constants';

import { connect } from 'react-redux'

class SearchConversations extends Component {
  constructor() {
    super()
    this.state ={
      text: "",
      conversations: []
    }
  }

  handleChange = (event) =>{
    this.setState({text: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`${API_ROOT}/conversations`)
      .then(res => res.json())
      .then(conversations => {
        const searchArr = conversations.filter(conversation => conversation.title.toLowerCase().includes(this.state.text))
        console.log(searchArr);
        this.setState({conversations: searchArr})
      })
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.text} onChange={this.handleChange}
            />
            <input type="submit" />
        </form>
        {this.state.conversations.length > 0 ?
          this.state.conversations.map(conversation => {
            return <SearchList conversation={conversation}/>
          })
          : null}
      </div>
    )
  }
}



const mapStateToProps = state =>({
  conversations: state.conversations
})
export default connect(mapStateToProps, null)(SearchConversations)
