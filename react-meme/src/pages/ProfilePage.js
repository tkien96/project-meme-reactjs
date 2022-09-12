import { useHistory } from "react-router-dom"
import Input from '../components/Shared/Input'
import Button from '../components/Shared/Button'
import { useEffect, useState } from 'react'
import { validateFormRegister, getToken } from '../helpers'
import { useDispatch, useSelector } from 'react-redux'
import { actUpdateAsync } from '../store/auth/actions'
import { DEFAULT_AVATAR } from "../constants"

export default function ProfilePage() {
    const dispatch = useDispatch()
    const token = getToken()
    const currentUser = useSelector(state => state.Auth.currentUser)
    const history = useHistory()
    const [isFormDirty, setIsFormDirty] = useState(true)
    const [formError, setFormError] = useState('')
    const [loading, setLoading] = useState(false)

    setTimeout(() => {
        if(currentUser === undefined){
            history.push('/login');
        }
    }, 1000)
    
    const [formData, setFormData] = useState({
        fullname: {
            value: currentUser?.fullname,
            error: ''
        },
        gender: {
            value: currentUser?.gender,
            error: ''
        },
        avatar: {
            value: currentUser?.avatar,
            error: ''
        },
        description: {
            value: currentUser?.description,
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
                gender: {
                    value: '',
                    error: validateFormRegister({
                        value: '',
                        name: 'gender'
                    })
                },
                avatar: {
                    value: '',
                    error: validateFormRegister({
                        value: '',
                        name: 'avatar'
                    })
                },
                description: {
                    value: '',
                    error: validateFormRegister({
                        value: '',
                        name: 'description'
                    })
                }
            })

            return false;
        };

        if (formData.fullname.error || formData.gender.error || formData.avatar.error || formData.description.error) return false;

        return true;
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        const isValid = checkFormIsValid();
        if (!isValid) {
            console.log('form error');
            return;
        }
        const { fullname, gender, avatar, description } = formData;
        if (loading) return;
        setLoading(true);
        setFormError('');

        const updateData = new FormData();
        updateData.append('avatar', avatar.value);
        updateData.append('fullname', fullname.value);
        updateData.append('description', description.value);
        updateData.append('gender', gender.value);
        
        dispatch(actUpdateAsync(updateData, token)).
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
                <div className="ass1-login__content">
                    <p>Profile</p>
                    <div className="ass1-login__form">
                        <div className="avatar">
                            <img src={formData.avatar.value} onError={(e) => {
                                        e.target.onerror = null
                                        e.target.src = DEFAULT_AVATAR
                                    }} alt={formData.fullname.value} />
                        </div>
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            { formError && <p className="form-login__error">{formError}</p> }
                            <Input
                                type="text"
                                placeholder="Tên hiển thị"
                                autoComplete="off"
                                className="form-control"
                                value={formData.fullname?.value}
                                error={formData.fullname?.error}
                                name="fullname"
                                onChange={handleOnChange}
                            />
                            <Input
                                typeForm="select"
                                className="form-control"
                                value={formData.gender?.value}
                                error={formData.gender?.error}
                                name="gender"
                                onChange={handleOnChange}
                            />
                            <Input
                                type="file"
                                className="form-control"
                                error={formData.avatar?.error}
                                name="avatar"
                            />
                            <Input
                                typeForm="textarea"
                                placeholder="Mô tả ngắn ..."
                                className="form-control"
                                cols={30} 
                                rows={5}
                                defaultValue={formData.description?.value}
                                error={formData.description?.error}
                                name="description"
                                onChange={handleOnChange}
                            />
                            <div className="ass1-login__send justify-content-center">
                                <Button type="submit" className="ass1-btn">Cập nhật</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>

    )
}