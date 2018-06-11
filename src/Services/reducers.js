import { SPEED,LOGIN } from './constatnts'

const initialState = {
  id: [],
  speed: 10,
  login:'',
}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_TODO':
      return {
        ...state,
        id: action.id,

      }
    case SPEED:
      return {
        ...state,
        speedReply: action.speed,

      }
      case LOGIN:
      return {
        ...state,
        loginReply: action.loginReply,

      }
    default:
      return state
  }
}

