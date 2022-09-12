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
        ...params,
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
  getPostByUserId({userid}, token = {}) {
    return postService.getListByUserId({userid}, token)
  },
  getPostDetail(postid) {
    return api.call().get('/post/post.php', {
      params: {
        postid: postid
      }
    });
  }
}

export default postService;