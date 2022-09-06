import Button from "../Shared/Button";
import PostItem from "./PostItem";

export default function Post(){
    return (
        <div className="ass1-section__list">
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <Button className="load-more" as="button"><span>Xem thêm</span></Button>
        </div>
    )
}