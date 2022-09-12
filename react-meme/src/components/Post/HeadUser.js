import { useParams } from "react-router-dom"
import { actGetInfoAsync } from "../../store/auth/actions"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { DEFAULT_AVATAR } from "../../constants"

export default function HeadUser ({
    total
}){
    const getId = useParams()
    const dispatch = useDispatch()
    const infoUser = useSelector(state => state.Auth.info)
    const currentUser = useSelector(state => state.Auth.currentUser)

    useEffect(() => {
        setTimeout(() => {
            dispatch(actGetInfoAsync(getId.id)).then(() => {})
        }, 1000)
    }, [dispatch, getId])
    
    return (
        <div className="ass1-head-user">
            <div className="ass1-head-user__content">
                <div className="ass1-head-user__image"><a href="#">
                    <img src={infoUser?.avatar} onError={(e) => {
                            e.target.onerror = null
                            e.target.src = DEFAULT_AVATAR
                        }} alt={infoUser?.fullname} />
                    </a></div>
                <div className="ass1-head-user__info">
                    <div className="ass1-head-user__info-head">
                        <div className="ass1-head-user__name">
                            <span>{infoUser?.fullname}</span>
                            <i><img src="../fonts/emotion/svg/Verified.svg" alt="" /></i>
                        </div>
                        <div className="w-100" />
                        <a href="#" className="ass1-head-user__btn-follow ass1-btn">Theo dõi</a>
                        { currentUser?.id ===  infoUser?.id && (
                            <>
                                <a href="thay-doi-password.html" className="ass1-head-user__btn-follow ass1-btn">Đổi mật khẩu</a>
                                <a href="profile.html" className="ass1-head-user__btn-follow ass1-btn">Profile</a>
                                s<a href="#" className="ass1-head-user__btn-options ass1-btn-icon"><i className="icon-Options"></i></a>
                            </>
                        ) }
                    </div>
                    <div className="ass1-head-user__info-statistic">
                        <div className="ass1-btn-icon"><i className="icon-Post" /><span>Bài viết: {total ?? 0}</span></div>
                        <div className="ass1-btn-icon"><i className="icon-Followers" /><span>Theo dõi: { infoUser?.profileviews }</span></div>
                        <div className="ass1-btn-icon"><i className="icon-Following" /><span>Đang theo dõi: { infoUser?.youviewed }</span></div>
                    </div>
                    { infoUser?.description && (<p>{infoUser?.description}</p>) }
                </div>
            </div>
        </div>
    )
}