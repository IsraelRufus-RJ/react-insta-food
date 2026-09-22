import {LOGO_URL} from "../utility/constants.js"

const Header = () => {
    return(
        <div className="header">
            <div className="app-logo-container">
                <img alt="app-logo" src={LOGO_URL}/>
            </div>
            <nav className="nav-bar">
                <ul>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                </ul>
            </nav>           
        </div>
    );
}

export default Header;