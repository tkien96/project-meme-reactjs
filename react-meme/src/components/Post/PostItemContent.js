import { Link } from "react-router-dom"
import { getQueryStr, RegExpKey } from "../../helpers";

export default function PostItemContent({
    id,
    data
}) {
    const link = "/post/" + id
    const queryStr = getQueryStr('query')
    let content = data.content
    if(queryStr !== "" && queryStr !== null){
        content = RegExpKey(data.content, queryStr)
    }
    return (
        <div className="ass1-section__content">
            <p dangerouslySetInnerHTML={{__html: content}}></p>
            <div className="ass1-section__image">
                <Link to={link}><img src={data.image} alt={id} /></Link>
            </div>
        </div>
    )
}