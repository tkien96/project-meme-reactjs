import PostItem from "./PostItem"
import Masonry from "react-masonry-css"

export default function Post({
    posts,
    masonry = false
}) {
    function renderItem(){
        if(masonry){
            const breakpointColumnsObj = {
                default: 2,
                500: 1
            }

            return (
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {
                        posts.map((item, index) => {
                            return (
                                <PostItem key={index} item={item} />
                            )
                        })
                    }
                </Masonry>
            )
        }else{  
            return (
                posts.map((item, index) => {
                    return (
                        <PostItem key={index} item={item} />
                    )
                })
            )
        }
    }

    return (
        <div className="ass1-section__list">
            {
                renderItem()
            }
        </div>
    )
}