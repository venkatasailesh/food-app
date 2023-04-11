import {Link} from "react-router-dom";
const Title=()=>(
    <a href="/">
        <img
        className="logo"
        alt="logo"
        src="https://img.freepik.com/premium-vector/piggy-logo_744263-4.jpg?w=2000"
        ></img></a>
 );


 const Header = ()=>{
    return(
        <div className="header">
            <Title/>
            <div className="nav">
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                    <li><Link to="/cart">cart</Link></li>
                    
                </ul>
            </div>
            </div>
);
}

export default Header;