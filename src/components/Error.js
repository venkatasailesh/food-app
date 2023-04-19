import { useRouteError,Link} from "react-router-dom";
import { ERROR_PIC } from "../config";
const Error = () => {
    const error = useRouteError();
    return(
    <div>
    <img src={ ERROR_PIC }  alt="Opps!! somithing went worng"></img>
    <div className="text-center border-double"> <Link  to="/"><button >GO TO HOME</button></Link></div>
    <h1>{error.status}:ERROR </h1> 
    </div>
    );
};

export default Error;