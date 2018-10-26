import React, {Component} from 'react'
import { API_ROOT } from '../constants';
import { fetchConversations } from '../adapters/conversationAdapter'
import { fetchUsers, findUser } from '../adapters/userAdapter'
import { postMessage } from '../adapters/messageAdapter'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom"


export const loadNewUser = (newUser) => {
  return(dispatch)=>{
    return dispatch()
  }
}

export const submitMessage = (imageData, id) =>{
  return (dispatch)=>{
    console.log("submitMessage", imageData, id);
    return (
      postMessage(imageData, id)
      .then(() => {
        findUser(id)
        .then(foundUser => dispatch({type: "ACTIVE_USER", payload: foundUser}))
      })
    )
  }
}


export const loadLeaderBoard = (messages) => {
  console.log("within loadLeaderBoard");
  const activeLeaderBoard = mapLeaderBoard(messages)
  return activeLeaderBoard
}

export const mapLeaderBoard = (messages) => {
  console.log(messages);
  const playersAndPoints = {}
  messages.forEach(message => {
    console.log(playersAndPoints);
    if (!(message.user.username in playersAndPoints)){
      playersAndPoints[message.user.username] = 0
    }
    if (message.user.username in playersAndPoints && message.image_url){
      console.log(message.image_url);
      playersAndPoints[message.user.username]++
    }
  })
  return playersAndPoints
}

export const loadActiveUser = (name) => {
  console.log("within active user the name is, ", name);
  return (dispatch) => {
    console.log("within load active user");
    return fetch(`${API_ROOT}/users`)
      .then(resp => resp.json())
      .then(users => {
        const activeUser = users.find(user => user.username === name)
          if (activeUser){
            console.log("the Active user is", activeUser.username, "with an  conversation id of  ", activeUser.conversation_id);
            return dispatch({type: "ACTIVE_USER", payload: activeUser})
          }
      })
  }
}

export const updateActiveConversation = (conversation) => {
  return {type: "UPDATE_ACTIVE_CONVERSATION", payload: conversation}
}

export const updateActiveUser = (user) => {
  return {type: "UPDATE_ACTIVE_USER", payload: user}
}
export const loadActiveConversation = (id, conversations) => {

  const activeConversation = conversations.find(
    conversation => conversation.id === id
  )
  console.log("the id is ", id);
  console.log("Conversations are ... ", conversations);
  console.log("the active conversation is   ", activeConversation);
  const leaderboard = loadLeaderBoard(activeConversation.messages)
  console.log(activeConversation);
  return {type: "ACTIVE_CONVERSATION", payload: [activeConversation, leaderboard]}
}


export const addMessage = (message, conversations)=> {

  const conversation = conversations.find(
    conversation => conversation.id === message.conversation_id
  );
  const foundMessage = conversation.messages.find(findMessage => findMessage.id === message.id)

  const updatedConversations = findAndReplace(message, conversation.messages, conversations, conversation.id)
  const updatedActiveConversations = updatedConversations.find(convo => convo.id === conversation.id)

  console.log("updateActiveConversation", updatedActiveConversations);

  return {type: "ADD_MESSAGE", payload: [updatedConversations, updatedActiveConversations]}
}


export const addConversation = (prevConvo, conversation) =>{
  return {type: "ADD_CONVERSATION", payload: [...prevConvo,conversation]}
}

export const loadConversations = () => {
  return (dispatch) => {
    fetchConversations()
    .then(conversations=> {
      dispatch(setConversations(conversations))
    })
  }
}

const setConversations = (conversations) => {
  return {
    type: "LOAD_CONVERSATION",
    payload: {
      conversations
    }
  }
}

const loadGroupChat = (messages) => {
  return {
    type: "LOAD_GROUPCHAT",
    payload: {
      messages
    }
  }
}

const findAndReplace = (message, conversation_messages, conversations, id) => {
  console.log("message findAndReplace", message);
  let newMessagesForOneConversation = conversation_messages.map(convoMessage => {
    if (convoMessage.id === message.id){
      convoMessage.emojis = message.emojis
      return convoMessage
    }
    return convoMessage
  })

  const updatedConversations = conversations.map(conversation => {
    if (conversation.id === id){
      conversation.messages = newMessagesForOneConversation
      return conversation
    }
    return conversation
  })
  console.log("final list of messages ", newMessagesForOneConversation);
  return updatedConversations
}
