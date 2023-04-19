import { useContext } from "react";
import UserContext from "../utils/Usercontext";
const Footer = ()=>{
    const {user} = useContext(UserContext);
    return(
    <>
        <h1>@sailesh food app this was devloped by </h1>
        <span className=" mt-2 font-bold text-lg">name: {user.name}</span>
        <span className="font-bold text-lg ml-4">email: {user.email}</span>
    </>
);
}


export default Footer;