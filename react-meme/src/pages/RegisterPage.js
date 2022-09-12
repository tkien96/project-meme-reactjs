import { Link, useHistory } from "react-router-dom"
import Input from '../components/Shared/Input'
import Button from '../components/Shared/Button'
import { useState } from 'react'
import { validateFormRegister } from '../helpers'
import { useDispatch } from 'react-redux'
import { actRegisterAsync } from '../store/auth/actions'

function RegisterPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isFormDirty, setIsFormDirty] = useState(true);
    const [formError, setFormError] = useState('');
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullname: {
            value: '',
            error: ''
        },
        email: {
            value: '',
            error: ''
        },
        password: {
            value: '',
            error: ''
        },
        repassword: {
            value: '',
            error: ''
        }
    })

    function handleOnChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value.trim();
        const error = validateFormRegister({ value, name });

        setFormData({
            ...formData,
            [name]: {
                value,
                error
            }
        });
        setIsFormDirty(false);
    }

    function checkFormIsValid() {
        if (isFormDirty) {
            setFormData({
                fullname: {
                    value: '',
                    error: validateFormRegister({
                        value: '',
                        name: 'fullname'
                    })
                },
                email: {
                    value: '',
                    error: validateFormRegister({
                        value: '',
                        name: 'email'
                    })
                },
                password: {
                    value: '',
                    error: validateFormRegister({
                        value: '',
                        name: 'password'
                    })
                },
                repassword: {
                    value: '',
                    error: validateFormRegister({
                        value: '',
                        name: 'repassword'
                    })
                }
            })

            return false;
        };

        if (formData.fullname.error || formData.email.error || formData.password.error || formData.repassword.error) return false;

        return true;
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        const isValid = checkFormIsValid();
        if (!isValid) {
            console.log('form error');
            return;
        }
        const { fullname, email, password, repassword } = formData;
        if (loading) return;
        setLoading(true);
        setFormError('');

        const registerData = {
            fullname: fullname.value,
            email: email.value,
            password: password.value,
            repassword: repassword.value
        }

        dispatch(actRegisterAsync(registerData)).
            then(res => {
                if (res.ok) {
                    history.push('/');
                } else {
                    setFormError(res.error);
                    setLoading(false);
                }
            })
    }

    return (
        <main>
            <div className="ass1-login">
                <div className="ass1-login__logo">
                <a href="index.html" className="ass1-logo">TCL Meme</a>
                </div>
                <div className="ass1-login__content">
                <p>Đăng ký một tài khoản</p>
                <div className="ass1-login__form">
                    {formError && <p className="form-login__error">{formError}</p>}
                    <form onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            placeholder="Tên hiển thị"
                            autoComplete="off"
                            required="required"
                            className="form-control"
                            value={formData.fullname.value}
                            error={formData.fullname.error}
                            name="fullname"
                            onChange={handleOnChange}
                        />
                        <Input
                            className="form-control"
                            type="email"
                            placeholder="Email"
                            autoComplete="off"
                            value={formData.email.value}
                            error={formData.email.error}
                            name="email"
                            onChange={handleOnChange}
                            required="required"
                        />
                        <Input
                            className="form-control"
                            type="password"
                            label="Mật khẩu"
                            placeholder="Mật khẩu"
                            autoComplete="new-password"
                            value={formData.password.value}
                            error={formData.password.error}
                            name="password"
                            onChange={handleOnChange}
                            required="required"
                        />
                        <Input
                            className="form-control"
                            type="password"
                            label="Mật khẩu"
                            placeholder="Nhập lại mật khẩu"
                            autoComplete="re-password"
                            value={formData.repassword.value}
                            error={formData.repassword.error}
                            name="repassword"
                            onChange={handleOnChange}
                            required="required"
                        />
                        <div className="ass1-login__send">
                            <Link to="/login">Đăng nhập</Link>
                            <Button type="submit" className="ass1-btn">Đăng ký</Button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </main>
    )
}

export default RegisterPage