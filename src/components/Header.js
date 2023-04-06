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
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                    <li>cart</li>
                </ul>
            </div>
            </div>
);
}

export default Header;