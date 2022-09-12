import { ACT_LOGIN, ACT_LOGOUT, ACT_GET_INFO } from "./actions";

const intState = {
  token: '',
  currentUser: null,
  info: []
}

function reducer(authState = intState, action) {
  switch (action.type) {
    case ACT_LOGIN:
      localStorage.setItem('access_token', action.payload.token)
      return {
        token: action.payload.token,
        currentUser: action.payload.user
      }
    case ACT_LOGOUT:
      localStorage.removeItem('access_token');
      return {
        token: '',
        currentUser: null
      }
    case ACT_GET_INFO:
      return {
        ...authState,
        info: action.payload.info
      }
    default:
      return authState;
  }
}

export default reducer;