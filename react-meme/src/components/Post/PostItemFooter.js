import { Link } from "react-router-dom"

export default function PostItemFooter({
    id,
    data
}) {
    const link = "/post/" + id
    return (
        <div className="ass1-section__footer">
            <Link to={link} className="ass1-section__btn-comment ass1-btn-icon"><i className="icon-Comment_Full" /><span>{data.count ?? 0}</span></Link>
            <a href="#" className="ass1-section__btn-upvote ass1-btn-icon"><i className="icon-Upvote"></i></a>
            <a href="#" className="ass1-section__btn-downvote ass1-btn-icon"><i className="icon-Downvote"></i></a>
            <a href="#" className="ass1-section__btn-like ass1-btn-icon"><i className="icon-Favorite_Full"></i><span>1,274</span></a>
            <Link to={link} className="ass1-section__btn-comment ass1-btn-icon"><i className="icon-Comment_Full" /><span>{data.count ?? 0}</span></Link>
        </div>
    )
}