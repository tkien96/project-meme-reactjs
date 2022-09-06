import Input from '../Shared/Input'

export default function HeaderSearch () {
    return (
        <div className="ass1-header__search">
            <form action="#">
                <Input type="search" name="search-text" className="form-control" placeholder="Nhập từ khóa ..." />
            </form>
        </div>
    )
}