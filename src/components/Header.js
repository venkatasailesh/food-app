import {Link} from "react-router-dom";
import { useState } from "react";
import useOnline from "../utils/useOnline";
import {LOGO} from "../config.js";




const Title=()=>(
    <a href="/">
        <img
        data-testid = "logo"
        className="h-28 p-2"
        alt="logo"
        src={LOGO}
        ></img></a>
 );


 const Header = ()=>{
    const [isLoggenedIn, setIsLoggedIn] = useState(false);
    const isonline = useOnline();
  
    return(
        <div className="flex justify-between bg-pink-50 shadow-lg">
            <Title/>
            <div>
                <ul className="flex py-10">
                    <li className="px-2 font-bold"><Link to="/">Home</Link></li>
                    <li className="px-2 font-bold"><Link to="/about">About</Link></li>
                    <li className="px-2 font-bold"><Link to="/contact">Contact</Link></li>
                    <li className="px-2 font-bold"><Link to="/cart">Cart</Link></li>
                    <li className="px-2 font-bold"><Link to="/instamart">Instamart</Link></li>
                    </ul>
            </div>
            <h1 className="m-8">
                {isonline ?"✅Online":"🔴Offline" }
            </h1>
            <div className="p-2 m-7 ml-2">
            {isLoggenedIn ? (
                <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
            ):(
                <button onClick={()=>setIsLoggedIn(true)}>Login</button>
            )}
            </div>
            </div>
);
}

export default Header;