import { Link } from "react-router-dom"
import HeaderMenu from './HeaderMenu'
import HeaderSearch from './HeaderSearch'
import Button from '../Shared/Button'
import { useDispatch, useSelector } from "react-redux"
import { actLogout } from "../../store/auth/actions";
import { DEFAULT_AVATAR } from "../../constants"

export default function Header() {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.Auth.currentUser);
    function handleLogout(e) {
        e.preventDefault();
        dispatch(actLogout());
    }
    
    return (
        <header>
            <div className="ass1-header">
                <div className="container">
                    <Link to="/" className="ass1-logo">TCL Meme</Link>
                    <HeaderMenu />
                    <HeaderSearch />
                    <Button to="./upload" type="header" as="a" icon="icon-Upvote" iconPos="left">Upload</Button>
                    {
                        currentUser ? (
                            <div className="currentUser">
                                <Link to="/profile" className="profile">
                                    <img src={currentUser.avatar} alt={currentUser.fullname} onError={(e) => {
                                        e.target.onerror = null
                                        e.target.src = DEFAULT_AVATAR
                                    }} />
                                    { currentUser.fullname }
                                </Link>
                                <i className="fa fa-sign-out" aria-hidden="true" onClick={handleLogout}></i>
                            </div>
                        ) : (
                            <Link to="/login"><i className="icons ion-person" /> Tài khoản</Link>
                        )
                    }
                </div>
            </div>
        </header>
    )
}