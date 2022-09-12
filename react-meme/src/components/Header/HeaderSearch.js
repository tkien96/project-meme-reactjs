import Input from '../Shared/Input'

export default function HeaderSearch () {
    return (
        <div className="ass1-header__search">
            <form action="#">
                <Input 
                    typeForm="search" 
                    type="text" 
                    name="search-text" 
                    className="form-control" 
                    placeholder="Nhập từ khóa ..." 
                />
            </form>
        </div>
    )
}