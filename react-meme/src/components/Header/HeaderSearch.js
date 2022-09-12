import Input from '../Shared/Input'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function HeaderSearch() {
    const history = useHistory()
    const [queryStr, setQueryStr] = useState('')

    function handleOnChange(evt) {
        setQueryStr(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        if (!queryStr) {
            return
        }
        const queryStrURI = encodeURIComponent(queryStr)
        history.push('/search?query=' + queryStrURI)
    }
    return (
        <div className="ass1-header__search">
            <form onSubmit={handleSubmit}>
                <Input
                    typeForm="search"
                    type="text"
                    name="search-text"
                    className="form-control"
                    placeholder="Nhập từ khóa ..."
                    onChange={handleOnChange}
                />
            </form>
        </div>
    )
}