import { API_ROOT } from '../constants';
import { fetchConversations } from '../adapters/conversationAdapter'
import { fetchUsers, findUser } from '../adapters/userAdapter'
import { postMessage } from '../adapters/messageAdapter'


export const submitMessage = (imageData, id) =>{
  return (dispatch)=>{
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
  return (dispatch) => {
    console.log("within load active user");
    return fetch(`${API_ROOT}/users`)
      .then(resp => resp.json())
      .then(users => {
        const activeUser = users.find(user => user.username === name)
        return dispatch({type: "ACTIVE_USER", payload: activeUser})
      })
  }
}


export const loadActiveConversation = (id, conversations) => {
  const activeConversation = conversations.find(
    conversation => conversation.id === id
  )
  const leaderboard = loadLeaderBoard(activeConversation.messages)
  console.log(activeConversation);
  return {type: "ACTIVE_CONVERSATION", payload: [activeConversation, leaderboard]}
}


export const addMessage = (message, conversations)=> {

  const conversation = conversations.find(
    conversation => conversation.id === message.conversation_id
  );
  const foundMessage = conversation.messages.find(findMessage => findMessage.id === message.id)

  if(foundMessage){
    conversation.messages = findAndReplace(message, conversation.messages)
  } else {
    conversation.messages = [...conversation.messages, message]
  }
  return {type: "ADD_MESSAGE", payload: conversations}
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

const findAndReplace = (message, conversation_messages) => {
  let newConvo = conversation_messages.map(convoMessage => {
    if (convoMessage.id === message.id){
      convoMessage.emojis = message.emojis
      return convoMessage
    }
    return convoMessage
  })
  return newConvo
}
