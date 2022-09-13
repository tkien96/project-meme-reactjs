export const BASE_URL = process.env.REACT_APP_BASE_URL
export const DEFAULT_AVATAR = '../assets/images/avatar-01.png'
export const DEFAULT_AVAILABLE = '../assets/images/no_image_available.jpg'
export const DATE_TEMPLATE = 'DD/MM/YYYY'
export const DATE_DETAIL = 'dd, MM YYYY'

export const MESSAGE_FORM_ERROR = {
  email_required            : 'Email không được rỗng',
  rest_user_invalid_email   : 'Email không hợp lệ',
  password_required         : 'Mật khẩu không được rỗng',
  password_length           : 'Mật khẩu phaỉ hơn 6 ký tự',
  repassword_required       : 'Xác nhận mật khẩu không được rỗng',
  repassword_length         : 'Xác nhận mật khẩu phaỉ hơn 6 ký tự',
  description_length        : 'Mô tả không được vượt quá 100 ký tự',
  fullname_required         : 'Tên hiển thị không được rỗng',
  gender_required           : 'Giới tính không được rỗng',
  default                   : 'Có lỗi xảy ra, vui lòng thử lại sau!'
}