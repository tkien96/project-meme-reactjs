import Post from "../components/Post"
import HeadUser from "../components/Post/HeadUser"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { actFetchPostByCategoryAsync, actFetchPostByUserIdAsync } from "../store/post/actions"
import Button from "../components/Shared/Button"
import InfiniteScroll from "react-infinite-scroll-component"
import { getToken } from '../helpers'

export default function PostPage({
    profile = false
}) {
    const getId = useParams()
    const token = getToken()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const { list: posts, currPage } = useSelector(state => state.Post.postPaging)

    useEffect(() => {
        if(profile){
            loadPost({userid: getId.id}, profile)
        }else{
            loadPost({tagIndex: getId.id}, profile)
        }
        
    }, [dispatch, getId, profile])

    function loadPost(params, profile) {
        setLoading(true)
        if(profile){
            dispatch(actFetchPostByUserIdAsync(params, token)).then(() => {
                setLoading(false)
            })
        }else{
            dispatch(actFetchPostByCategoryAsync(params)).then(() => {
                setLoading(false)
            })
        }
    }

    function fetchMoreData() {
        if(!profile){
            setTimeout(() => {
                if (loading) return
                const params = {
                    currPage: currPage + 1,
                    tagIndex: getId.id
                }
                loadPost(params)
            }, 1000)
        }
    }

    return (
        <main>
            <div className="container">
                { profile && (<HeadUser total={ posts.length }></HeadUser>) }
                <div className="ass1-section__wrap row ass1-section__isotope-init">
                    <div className="grid-sizer" />
                    <InfiniteScroll
                        dataLength={posts.length}
                        next={fetchMoreData}
                        hasMore={true}
                        loader={!profile && (<Button loading={loading} className="load-more" as="button"><span>Xem thêm</span></Button>)}
                    >
                        <Post posts={posts} masonry={true}></Post>
                    </InfiniteScroll>
                </div>
            </div>
        </main>
    )
}