const initialState = {
  conversations: [],
  activeUser: {
    id: 1,
    username: "kos2kos",
    password: null,
    conversation_id: 1,
    points: 4,
    workouts: [
      {
        id: 2,
        text: "" ,
        image_url: "http://localhost:3000/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--aca974c1a388c38227730206936df0ab8b732c0c/007.jpg",
        user_id: 1,
        conversation_id: 1,
        created_at: "2018-10-20T15:35:29.046Z",
        updated_at: "2018-10-20T15:35:32.416Z"
      }
    ]
  },
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
    case 'UPDATE_ACTIVE_USER':
    return{
      ...state,
      activeUser: action.payload
    }

    case 'UPDATE_ACTIVE_CONVERSATION':
    return{
      ...state,
      activeConversation: action.payload
    }

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
