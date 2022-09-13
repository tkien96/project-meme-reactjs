import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { actFetchPostAsync } from "../store/post/actions"
import Button from "../components/Shared/Button"
import PostUser from "../components/PostUser"
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
                    <PostUser></PostUser>
                </div>
            </div>
        </main>
    )
}