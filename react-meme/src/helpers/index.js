import { MESSAGE_FORM_ERROR } from '../constants'

export function getQueryStr(name) {
  return new URLSearchParams(window.location.search).get(name)
}

export function getToken() {
  return localStorage.getItem('access_token');
}

export function mappingPostData(post) {
  return {
    id: post?.PID,
    header: {
      userid: post?.USERID,
      avatar: post?.profilepicture,
      fullname: post?.fullname,
      added: post?.time_added
    },
    content: {
      image: post?.url_image,
      content: post?.post_content,
      status: post?.status,
    },
    footer: {
      count: post?.count
    }
  }
}

export function mappingUser(user) {
  return {
    id: user?.USERID,
    email: user?.email,
    fullname: user?.fullname,
    gender: user?.gender,
    description: user?.description,
    yourviewed: user?.yourviewed,
    profileviews: user?.profileviews,
    youviewed: user?.youviewed,
    avatar: user?.profilepicture,
    permission: user?.permission
  }
}

export function handleHashCategoryById(categories) {
  const hashObj = {}

  categories.forEach(categoryItem => {
    const key = categoryItem.id
    hashObj[key] = {
      id: categoryItem.id,
      text: categoryItem.text
    }
  })

  return hashObj
}

export function validateFormData({ value, name }) {
  let error = '';

  if (name === 'email') {
    if (!value) {
      error = MESSAGE_FORM_ERROR.email_required;
    }

    if (!validateEmail(value)) {
      error = MESSAGE_FORM_ERROR.rest_user_invalid_email;
    }
  }

  if (name === 'password') {
    if (!value) {
      error = 'Password không được rỗng!';
    } else if (value.length < 6) {
      error = 'Password phải có ít nhất 6 ký tự'
    }
  }

  return error;
}

export function validateFormRegister({ value, name }) {
  let error = '';

  if (name === 'fullname' && !value) {
    error = MESSAGE_FORM_ERROR.fullname_required;
  }

  if (name === 'password') {
    if (!value) {
      error = MESSAGE_FORM_ERROR.password_required;
    } else if (value.length < 6) {
      error = MESSAGE_FORM_ERROR.password_length;
    }
  }

  if (name === 'description' && value.length >= 100) {
    error = MESSAGE_FORM_ERROR.description_length;
  }

  if (name === 'repassword') {
    if (!value) {
      error = MESSAGE_FORM_ERROR.password_required;
    } else if (value.length < 6) {
      error = MESSAGE_FORM_ERROR.password_length;
    }
  }

  if (name === 'email') {
    if (!value) {
      error = MESSAGE_FORM_ERROR.email_required;
    }

    if (!validateEmail(value)) {
      error = MESSAGE_FORM_ERROR.rest_user_invalid_email;
    }
  }

  return error;
}

export function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export function validateFileUpload(file) {
  
}

export function RegExpKey(title, keyword) {
  if (keyword !== '') {
    return title.replace(new RegExp(keyword, 'ig'), function (match) {
      return "<mark>" + match + "</mark>";
    });
  }
}

export function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}