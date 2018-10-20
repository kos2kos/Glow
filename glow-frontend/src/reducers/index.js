const initialState = {
  conversations: [],
  activeUser: {username: "Nkosi"},
  activeConversation: {title: "Boom Town", messages: []},
  leaderboard: {kos2kos: 1}
}


const reducer = (state = initialState, action) => {
  console.log("My action type is", action.type);
  console.log("My action payload is", action.payload);

  switch (action.type) {

    case 'LOAD_CONVERSATION':
    return{
      ...state,
      conversations: action.payload.conversations
    }

    // case 'ACTIVE_LEADERBOARD':
    // return{
    //   ...state,
    //   leaderboard: action.payload
    // }

    case 'ACTIVE_USER':
    return{
      ...state,
      activeUser: action.payload
    }

    case 'ACTIVE_CONVERSATION':
    return{
      ...state,
      activeConversation: action.payload[0],
      leaderboard: action.payload[1]
    }

    case 'ADD_CONVERSATION':
    return {
      ...state,
      conversations: action.payload
    }

    case 'ADD_MESSAGE':
    return{
      ...state,
      conversations: action.payload
    }


    default:
    return state
  }
}

export default reducer
