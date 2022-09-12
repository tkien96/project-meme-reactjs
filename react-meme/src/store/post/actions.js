import { mappingPostData } from "../../helpers";
import postService from "../../services/post";

// Action Type
export const ACT_FETCH_POST   = 'ACT_FETCH_POST'
export const ACT_FETCH_DETAIL   = 'ACT_FETCH_DETAIL'

// Action
export function actFetchDetail(detail) {
  return {
    type: ACT_FETCH_DETAIL,
    payload: {
      detail
    }
  }
}
export function actFetchPost({ posts, currPage, copy = true }) {
  return {
    type: ACT_FETCH_POST,
    payload: {
      posts, currPage, copy
    }
  }
}

export function actFetchPostAsync({
  pagesize = 3,
  currPage = 1
} = {}) {
  return async (dispatch) => {
    try {
      const response = await postService.getPost({ pagesize, currPage })
      const posts = response.data.posts.map(mappingPostData)
      dispatch(actFetchPost({ posts, currPage }))
    } catch (err) {
      // TODO 
    }
  }
}

export function actFetchPostByCategoryAsync({
  pagesize = 4,
  currPage = 1,
  tagIndex = 0
} = {}) {
  return async (dispatch) => {
    try {
      const response = await postService.getPostByCategory({ pagesize, currPage, tagIndex })
      const posts = response.data.posts.map(mappingPostData)
      dispatch(actFetchPost({ posts, currPage }))
    } catch (err) {
      // TODO 
    }
  }
}

export function actFetchPostByUserIdAsync({userid}, token) {
  return async (dispatch) => {
    try {
      const response = await postService.getPostByUserId({userid}, token)
      const posts = response.data.posts.map(mappingPostData)
      const currPage = 0
      const copy = false
      dispatch(actFetchPost({ posts, currPage, copy }))
    } catch (err) {
      // TODO 
    }
  }
}

export function actFetchDetailAsync({
  postid
} = {}) {
  return async (dispatch) => {
    try {
      const response = await postService.getPostDetail(postid)
      dispatch(actFetchDetail(response.data.data));
    } catch (err) {
      // TODO 
    }
  }
}