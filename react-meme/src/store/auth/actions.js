import { authService } from "../../services/auth"
import { mappingUser } from "../../helpers"
// Action Type
export const ACT_LOGIN = 'ACT_LOGIN';
export const ACT_LOGOUT = 'ACT_LOGOUT';
export const ACT_REGISTER = 'ACT_REGISTER';
export const ACT_GET_INFO = 'ACT_GET_INFO';

// Action
export function actLogin({ user, token }) {
  return {
    type: ACT_LOGIN,
    payload: {
      user,
      token
    }
  }
}

export function actGetInfo(info) {
  return {
    type: ACT_GET_INFO,
    payload: {
      info
    }
  }
}

// Action Async
export function actGetInfoAsync(userId) {
  return async dispatch => {
    try {
      const response = await authService.getInfo(userId)
      const user = mappingUser(response.data.user)
      dispatch(actGetInfo(user))
      return {
        ok: true
      }
    } catch (error) {
      return {
        ok: false,
        error: error
      }
    }
  }
}


export function actFetchMeAsync(token) {
  return async dispatch => {
    try {
      const userToken = await authService.fetchMe(token)
      const userByID = await authService.getInfo(userToken.data.user.id)
      const user = mappingUser(userByID.data.user)
      dispatch(actLogin({ user, token }))
      return {
        ok: true
      }
    } catch (error) {
      return {
        ok: false,
        error: error
      }
    }
  }
}

export function actLoginAsync(email, password) {
  return async (dispatch) => {
    try {
      const response = await authService.login(email, password)
      const responseMe = await dispatch(actFetchMeAsync(response.data.token))
      return {
        ok: responseMe.ok,
        error: responseMe.error
      }
    } catch (error) {
      return {
        ok: false,
        error: 'Email hoặc Password không hợp lệ!'
      }
    }
  }
}

export function actLogout() {
  return {
    type: ACT_LOGOUT
  }
}

export function actRegisterAsync({fullname, email, password, repassword}) {
  return async (dispatch) => {
    try {
      const response = await authService.register({fullname, email, password, repassword});
      dispatch(actLoginAsync(email, password))
      return {
        ok: true
      }
    } catch (error) {
      return {
        ok: false,
        error: error.response.data.error
      }
    }
  }
}

export function actUpdateAsync(updateData, token) {
  return async (dispatch) => {
    try {
      const response = await authService.update(updateData, token)
      const user = mappingUser(response.data.user)
      dispatch(actFetchMeAsync(token))
      return {
        ok: true
      }
    } catch (error) {
      return {
        ok: false,
        error: error.response.data.error
      }
    }
  }
}