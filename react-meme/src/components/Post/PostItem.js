import PostItemContent from "./PostItemContent";
import PostItemFooter from "./PostItemFooter";
import PostItemHead from "./PostItemHead";

export default function PostItem(){
    return(
        <div className="ass1-section__item">
            <div className="ass1-section">
                <PostItemHead />
                <PostItemContent />
                <PostItemFooter />
            </div>
        </div>
    )
}