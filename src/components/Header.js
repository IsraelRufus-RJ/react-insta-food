import {LOGO_URL} from "../utility/constants.js"
import {useState} from "react";

const Header = () => {
    //const btnText = "Sign In";
    const [btnText, setBtnText] = useState("Sign In");

    console.log("Header Rendered");

    return(
        <div className="header">
            <div className="app-logo-container">
                <img alt="app-logo" src={LOGO_URL}/>
            </div>
            <nav className="nav-bar">
                <ul>
                    <li>Offers</li>
                    <li>Help</li>
                    <li><button className="sign-in" onClick={()=>{
                        btnText === "Sign In" ? setBtnText("Sign Out") : setBtnText("Sign In");
                    }}>{btnText}</button></li>
                    <li>Cart</li>
                </ul>
            </nav>           
        </div>
    );
}

export default Header;