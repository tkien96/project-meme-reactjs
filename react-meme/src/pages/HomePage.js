import { Link } from "react-router-dom";
import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { actFetchPostAsync } from "../store/post/actions"
import Button from "../components/Shared/Button"
import InfiniteScroll from "react-infinite-scroll-component"

export default function HomePage() {
    const { list: posts, currPage } = useSelector(state => state.Post.postPaging);
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch();
    useEffect(() => {
        loadPost()
    }, [dispatch])

    function fetchMoreData() {
        setTimeout(() => {
            if (loading) return
            const params = { currPage: currPage + 1 }
            loadPost(params)
        }, 1000)
    }

    function loadPost(params = {}) {
        setLoading(true)
        dispatch(actFetchPostAsync(params)).then(() => {
            setLoading(false)
        })
    }

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <InfiniteScroll
                            dataLength={posts.length}
                            next={fetchMoreData}
                            hasMore={true}
                            loader={<Button loading={loading} className="load-more" as="button"><span>Xem thêm</span></Button>}
                        >
                            <Post posts={posts} />
                        </InfiniteScroll>
                    </div>
                    <div className="col-lg-4">
                        <aside className="ass1-aside">
                            <div className="ass1-content-head__t">
                                <div>Bài viết gần đây của bạn.</div>
                            </div>
                            <div>Vui lòng đăng nhập để xem nội dung này
                                <Link to="/login">Đăng nhập</Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </main>
    )
}