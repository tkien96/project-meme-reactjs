import { Link, useHistory } from "react-router-dom"
import Button from "../components/Shared/Button"
import Input from "../components/Shared/Input";

import { useState } from 'react'
import { validateFormData } from '../helpers'
import { useDispatch } from 'react-redux'
import { actLoginAsync } from '../store/auth/actions'

export default function LoginPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [isFormDirty, setIsFormDirty] = useState(true);
    const [formError, setFormError] = useState('');
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: {
            value: '',
            error: ''
        },
        password: {
            value: '',
            error: ''
        }
    });

    function handleOnChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value.trim();
        const error = validateFormData({ value, name });

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
                email: {
                    value: '',
                    error: validateFormData({
                        value: '',
                        name: 'email'
                    })
                },
                password: {
                    value: '',
                    error: validateFormData({
                        value: '',
                        name: 'password'
                    })
                }
            })

            return false;
        };

        if (formData.email.error || formData.password.error) return false;

        return true;
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        const isValid = checkFormIsValid();

        if (!isValid) {
            console.log('form error');
            return;
        }

        const { email, password } = formData;

        if (loading) return;

        setLoading(true);
        setFormError('');

        dispatch(actLoginAsync(email.value, password.value)).
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
        <div className="ass1-login">
            <div className="ass1-login__logo">
                <Link to="/" className="ass1-logo">TCL Meme</Link>
            </div>
            <div className="ass1-login__content">
                <p>Đăng nhập</p>
                <div className="ass1-login__form">
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        {formError && <p className="form-login__error">{formError}</p>}
                        <Input
                            type="text"
                            placeholder="Email"
                            autoComplete="off"
                            required="required"
                            className="form-control"
                            value={formData.email.value}
                            error={formData.email.error}
                            name="email"
                            onChange={handleOnChange}
                        ></Input>
                        <Input
                            typeForm="copy"
                            type="password"
                            placeholder="Mật khẩu"
                            autoComplete="off"
                            required="required"
                            className="form-control"
                            value={formData.password.value}
                            error={formData.password.error}
                            name="password"
                            onChange={handleOnChange}
                        ></Input>
                        <div className="ass1-login__send">
                            <Link to="/register">Đăng ký một tài khoản</Link>
                            <Button loading={loading} type="submit" className="ass1-btn">Đăng nhập</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}