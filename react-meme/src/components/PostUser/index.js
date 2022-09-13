import { useEffect } from "react"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { actFetchPostByUserIdAsync } from "../../store/post/actions"
import PostItem from "../Post/PostItem"

export default function PostUser(){
    const dispatch = useDispatch();
    const cUser = useSelector(state => state.Auth.currentUser)
    const postUser = useSelector(state => state.Post.postUser);
    const idCurrentUser = cUser?.id;
    
    useEffect(() => {   
        idCurrentUser && actFetchPostByUserIdAsync({userid: idCurrentUser}, true)
    }, [dispatch, idCurrentUser])

    return (
        <div className="col-lg-4">
            <aside className="ass1-aside">
                <div className="ass1-content-head__t">
                    <div>Bài viết gần đây của bạn.</div>
                </div>
                {
                    cUser ? (
                        postUser.lenght > 0 ? (postUser.map((item, index) => {
                            return (
                                <PostItem key={index} item={item} />
                            )    
                        })) : (
                            <div>Bạn chưa có bài viết nào
                                <Link to="/upload"> Đăng bài ngay</Link>
                            </div>  
                        )
                    ) : (
                        <div>Vui lòng đăng nhập để xem nội dung này
                            <Link to="/login">Đăng nhập</Link>
                        </div>  
                    )
                }
                
            </aside>
        </div>
    )
}