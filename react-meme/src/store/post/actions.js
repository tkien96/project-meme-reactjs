import { mappingPostData, getToken } from "../../helpers";
import postService from "../../services/post";
// Action Type
export const ACT_FETCH_POST = 'ACT_FETCH_POST'
export const ACT_FETCH_DETAIL = 'ACT_FETCH_DETAIL'
export const ACT_FETCH_POST_USER = 'ACT_FETCH_POST_USER'

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

export function actFetchPostUser({ posts }) {
  return {
    type: ACT_FETCH_POST_USER,
    payload: {
      posts
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

export function actFetchPostByUserIdAsync({
  userid
}, home = false) {
  return async (dispatch) => {
    try {
      const response = await postService.getPostByUserId({ userid }, getToken())
      const posts = response.data.posts.map(mappingPostData)
      if (home) {
        dispatch(actFetchPostUser(posts))
      } else {
        const currPage = 0
        const copy = false
        dispatch(actFetchPost({ posts, currPage, copy }))
      }
    } catch (err) {
      console.log(err)
    }
  }
}

export function actFetchPostByQueryAsync(query) {
  return async (dispatch) => {
    try {
      const response = await postService.getPostByQuery(query)
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

export function actUploadAsync(uploadData) {
  return async (dispatch) => {
    try {
      const response = await postService.upload(uploadData, getToken())
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