const initialState = {
  conversations: [],
  activeConversation: null
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_CONVERSATION':
    return{
      ...state,
      conversations: action.payload.conversations
    }

    case 'ACTIVE_CONVERSATION':
    return{
      ...state,
      activeConversation: action.payload
    }

    case 'ADD_CONVERSATION':
    return {
      ...state,
      conversations: action.payload
    }


    default:
    return state
  }
}

export default reducer
