import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import Button from '../components/Shared/Button'
import Input from "../components/Shared/Input"
import { DEFAULT_AVAILABLE } from "../constants"
import { validateFileUpload } from "../helpers"
import { actUploadAsync } from '../store/post/actions'
import $ from "jquery"

export default function UploadPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const currentUser = useSelector(state => state.Auth.currentUser)
    const { categories } = useSelector(state => state.Category)
    const [loading, setLoading] = useState(false)
    const [previewImage, setPreviewImage] = useState(DEFAULT_AVAILABLE)
    const [file, setFile] = useState('')
    const [category, setCategory] = useState('')
    const [formData, setFormData] = useState({
        url_image: '',
        post_content: ''
    })

    setTimeout(() => {
        if (currentUser === undefined) {
            history.push('/login');
        }
    }, 1000)

    function handleOnChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value.trim();
        name === 'url_image' && setPreviewImage(value)
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleChooseFile(e) {
        e.preventDefault()
        $('input[type=file]').click();
    }

    function handleChangeFile(e) {
        const file = e.target.files[0];
        if (!file) return;
        let error = validateFileUpload(file);
        if (error) {
            alert(error);
        } else {
            setPreviewImage(URL.createObjectURL(file));
        }
        setFile(file);
    }

    function handleClickCategory(){
        const allChecked = document.querySelectorAll('input[name=category]:checked');
        const arrCategory = Array.from(allChecked).map(checkbox => checkbox.value)
        setCategory(arrCategory.toString())
    }

    function handleUpload(evt) {
        evt.preventDefault();
        if(loading) return;
        const { url_image, post_content } = formData;

        if(!url_image && !file){
            alert('Bắt buộc nhập link hình hoặc chọn hình từ máy tính')
            return;
        }
        if(!category){
            alert('Bắt buộc chọn danh mục cho bài viết')
            return;
        }

        const uploadData = new FormData();
        uploadData.append('obj_image', file);
        uploadData.append('url_image', url_image);
        uploadData.append('post_content', post_content);
        uploadData.append('category', category);

        setLoading(true);
        dispatch(actUploadAsync(uploadData)).
            then(res => {
                if (res.ok) {
                    setLoading(false);
                    history.push('/');
                }
            })
    }

    return (
        <main>
            <div className="container">
                {/*sections*/}
                <div className="row">
                    <div className="col-lg-8">
                        {/*section*/}
                        <div className="ass1-section ass1-section__edit-post">
                            <div className="ass1-section__content">
                                <form action="#">
                                    <div className="form-group">
                                        <Input
                                            name="url_image"
                                            type="text"
                                            className="form-control ttg-border-none"
                                            placeholder="https://"
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Input
                                            typeForm="textarea"
                                            placeholder="Mô tả ..."
                                            className="form-control ttg-border-none"
                                            cols={30}
                                            rows={5}
                                            name="post_content"
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                </form>
                                <div className="ass1-section__image">
                                    <a><img src={previewImage} alt="default" /></a>
                                </div>
                                <a href="https://memeful.com/" target="_blank" className="ass1-btn ass1-btn-meme">Chế ảnh từ
                                    meme</a>
                                <a className="ass1-btn ass1-btn-meme" onClick={handleChooseFile} href="#">Đăng ảnh từ máy tính</a>
                                <form encType="multipart/form-data" style={{ display: 'none' }}>
                                    <Input
                                        type="file"
                                        className="form-control"
                                        name="avatar"
                                        onChange={handleChangeFile}
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <aside className="ass1-aside ass1-aside__edit-post">
                            <div>
                                <Button loading={loading} onClick={handleUpload} className="ass1-btn">Đăng bài</Button>
                            </div>
                            <div className="ass1-aside__edit-post-head">
                                <span style={{ display: 'block', width: '100%', marginBottom: '10px' }}>Chọn danh mục</span>
                                {
                                    categories.length > 0 && categories.map((item, index) => {
                                        return (
                                            <Input
                                                key={index}
                                                typeForm="checkbox"
                                                name="category"
                                                value={item?.id}
                                                onClick={handleClickCategory}
                                            >
                                                {item?.text}
                                            </Input>
                                        )
                                    })
                                }
                            </div>
                            <div className="ass1-aside__get-code">
                                <p>Share Link</p>
                            </div>
                            <div className="ass1-aside__social">
                                <a href className="ass1-btn-social__facebook ass1-btn-social"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                <a href className="ass1-btn-social__twitter ass1-btn-social"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                <a href className="ass1-btn-social__google ass1-btn-social"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </main>
    )
}