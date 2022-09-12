import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import { sliceIntoChunks } from '../../helpers'
import $ from "jquery"

export default  function HeaderMenu() {
    const { categories } = useSelector(state => state.Category)
    const chunkCategories = sliceIntoChunks(categories, 5)

    function renderMenu(items, index) {
        return (
            <ul key={index}>
                {
                    items.map(item => {
                        let link = "/categories/" + item.id
                        return (
                            <li key={item.id}>
                                <Link to={link}>{item.text}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    function handleClickMenu(e){
        e.preventDefault()
        $(e.target).parent().find(".ass1-header__nav").slideToggle(300, 'swing');
    }

    return (
        <nav>
            <ul className="ass1-header__menu">
                <li>
                    <a onClick={handleClickMenu}>Danh mục</a>
                    <div className="ass1-header__nav" style={{ display: 'none' }}>
                        <div className="container">
                            {
                                chunkCategories.map((items, index) => renderMenu(items, index))
                            }
                        </div>
                        <div className="ass1-header__menu-transition" />
                    </div>
                </li>
                <li className="active">
                    <a href="#">Hot</a>
                </li>
            </ul>
        </nav>
    )
}