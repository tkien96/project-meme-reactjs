import HeaderMenu from './HeaderMenu'
import HeaderSearch from './HeaderSearch'
import Button from '../Shared/Button'
import Icon from '../Shared/Icon'

export default function Header(){
    return (
        <header>
            <div className="ass1-header">
                <div className="container">
                    <a href="index.html" className="ass1-logo">TCL Meme</a>
                    <HeaderMenu />
                    <HeaderSearch />
                    <Button href="./" type="header" as="a" icon="icon-Upvote" iconPos="left">Upload</Button>
                    <Button href="dang-nhap.html" as="a" type="header">Login</Button>
                </div>
            </div>
        </header>
    )
}