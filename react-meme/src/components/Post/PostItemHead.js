import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localeVi from 'dayjs/locale/vi';
import { Link } from "react-router-dom"
import { DEFAULT_AVATAR } from '../../constants'

dayjs.extend(relativeTime);
dayjs.locale(localeVi);

export default function PostItemHead({
    data
}){
    const createdDateObj = dayjs(data.added);
    const dateRelative = createdDateObj.fromNow();
    const link = '/postuser/' + data.userid

    return (
        <div className="ass1-section__head">
            <Link to={link} className="ass1-section__avatar ass1-avatar">
                <img src={data.avatar} alt={data.fullname} onError={(e) => {
                    e.target.onerror = null
                    e.target.src = DEFAULT_AVATAR
                }} />
            </Link>
            <div>
                <Link to={link} className="ass1-section__name">{data.fullname}</Link>
                <span className="ass1-section__passed">{dateRelative}</span>
            </div>
        </div>
    )
}