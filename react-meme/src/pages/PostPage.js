import Post from "../components/Post"
import HeadUser from "../components/Post/HeadUser"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { actFetchPostByCategoryAsync, actFetchPostByUserIdAsync, actFetchPostByQueryAsync } from "../store/post/actions"
import Button from "../components/Shared/Button"
import InfiniteScroll from "react-infinite-scroll-component"
import { getToken, getQueryStr } from '../helpers'

export default function PostPage({
    typePost = false
}) {
    const getParam = useParams()
    const token = getToken()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const { list: posts, currPage } = useSelector(state => state.Post.postPaging)
    const queryStr = getQueryStr('query')

    useEffect(() => {
        if(typePost === 0){
            loadPost({tagIndex: getParam.id}, typePost)
        }else if(typePost === 1){
            loadPost({userid: getParam.id}, typePost)
        }else if(typePost === 2){
            loadPost(queryStr, typePost)
        }
        
    }, [dispatch, getParam, typePost])

    function loadPost(params, typePost) {
        setLoading(true)
        if(typePost === 0){
            dispatch(actFetchPostByCategoryAsync(params)).then(() => {
                setLoading(false)
            })
        }else if(typePost === 1){
            dispatch(actFetchPostByUserIdAsync(params, token)).then(() => {
                setLoading(false)
            })
        }else if(typePost === 2){
            dispatch(actFetchPostByQueryAsync(params)).then(() => {
                setLoading(false)
            })
        }
    }

    function fetchMoreData() {
        if(typePost === 0){
            setTimeout(() => {
                if (loading) return
                const params = {
                    currPage: currPage + 1,
                    tagIndex: getParam.id
                }
                loadPost(params)
            }, 1000)
        }
    }

    return (
        <main>
            <div className="container">
                { (typePost === 2) && (<h3 className="title-search" type="search">{posts.length} kết quả tìm kiếm với từ khóa "{ queryStr }"</h3>) }
                { (typePost === 1) && (<HeadUser total={ posts.length }></HeadUser>) }
                <div className="ass1-section__wrap row ass1-section__isotope-init">
                    <div className="grid-sizer" />
                    <InfiniteScroll
                        dataLength={posts.length}
                        next={fetchMoreData}
                        hasMore={true}
                        loader={!typePost && (<Button loading={loading} className="load-more" as="button"><span>Xem thêm</span></Button>)}
                    >
                        <Post posts={posts} masonry={true}></Post>
                    </InfiniteScroll>
                </div>
            </div>
        </main>
    )
}