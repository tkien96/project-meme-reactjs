import { api } from './api';

export const authService = {
  login(email, password) {
    return api.call().post('/member/login.php', {
      email,
      password
    })
  },
  fetchMe(token) {
    return api.call().post('/member/checktoken.php',
      { token }
    )
  },
  register({ fullname, email, password, repassword }) {
    return api.call().post('/member/register.php', {
      fullname,
      email,
      password,
      repassword
    })
  },
  update(updateData, token) {
    return api.call().post('/member/update.php', updateData, {
        headers: {
          "accept": "application/json, text/plain, */*, multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
      }
    )
  },
  getInfo(userId) {
    return api.call().get('/member/member.php?userid=' + userId)
  }
}