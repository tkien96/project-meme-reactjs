import { ACT_FETCH_POST, ACT_FETCH_DETAIL, ACT_FETCH_POST_USER } from "./actions";

const intState = {
  postPaging: {
    list: [],
    currPage: 1
  },
  postUser: [],
  detail: []
}

function reducer(postState = intState, action) {
  switch (action.type) {
    case ACT_FETCH_DETAIL:
      return {
        ...postState,
        detail: action.payload.detail
      }
      case ACT_FETCH_POST:
        if(action.payload.copy){
          return {
            ...postState,
            postPaging: {
              ...postState.postPaging,
              list: action.payload.currPage === 1 ? action.payload.posts : [...postState.postPaging.list, ...action.payload.posts],
              currPage: action.payload.currPage,
            }
          }
        }else{
          return {
            ...postState,
            postPaging: {
              ...postState.postPaging,
              list: action.payload.posts,
              currPage: action.payload.currPage,
            }
          }
        }
        case ACT_FETCH_POST_USER:
          return {
            ...postState,
            postUser: action.payload.posts
          }
    default:
      return postState;
  }
}

export default reducer;