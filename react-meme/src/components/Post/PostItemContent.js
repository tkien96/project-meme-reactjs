import { Link } from "react-router-dom"

export default function PostItemContent({
    id,
    data
}) {
    const link = "/post/" + id
    return (
        <div className="ass1-section__content">
            <p>{data.content}</p>
            <div className="ass1-section__image">
                <Link to={link}><img src={data.image} alt={id} /></Link>
            </div>
        </div>
    )
}