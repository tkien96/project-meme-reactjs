import { api } from './api';

const postService = {
  getList(params) {
    return api.call().get('/post/getListPagination.php', {
      params: {
        ...params
      }
    });
  },
  getListByCategory(params) {
    return api.call().get('/post/getListByCategory.php', {
      params: {
        ...params
      }
    });
  },
  getListByUserId(params, token) {
    return api.call().get('/post/getListPostUserID.php', {
      params: {
        ...params
      },
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  },
  getPost({
    pagesize = 3,
    currPage = 1
  } = {}) {
    return postService.getList({
      pagesize,
      currPage
    })
  },
  getPostByCategory({
    pagesize = 4,
    currPage = 1,
    tagIndex = 0
  } = {}) {
    return postService.getListByCategory({
      pagesize,
      currPage,
      tagIndex
    })
  },
  getPostByUserId({userid}, token) {
    return postService.getListByUserId({userid}, token)
  },
  getPostByQuery(query) {
    return api.call().get('/post/search.php', {
      params: {
        query: query
      }
    });
  },
  getPostDetail(postid) {
    return api.call().get('/post/post.php', {
      params: {
        postid: postid
      }
    });
  },
  upload(data, token) {
    return api.call().post('/post/addNew.php', data, {
        headers: {
          "accept": "application/json, text/plain, */*, multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
      }
    )
  }
}

export default postService;