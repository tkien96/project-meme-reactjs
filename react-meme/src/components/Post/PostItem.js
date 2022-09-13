import PostItemContent from "./PostItemContent";
import PostItemFooter from "./PostItemFooter";
import PostItemHead from "./PostItemHead";
import PostItemFeeling from "./PostItemFeeling";
import cls from 'classnames'

export default function PostItem({
    item,
    classItem = null,
    feeling
}) {
    return (
        <div className={cls('ass1-section__item', {
            'col-lg-6': classItem
        })}>
            {
                <div className="ass1-section">
                    <PostItemHead data={item.header} />
                    <PostItemContent id={item.id} data={item.content} />
                    <PostItemFooter id={item.id} data={item.footer} />
                    { feeling && <PostItemFeeling /> }
                </div>
            }
        </div>
    )
}