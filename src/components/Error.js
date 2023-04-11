import { useRouteError,Link} from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    return(
    <div className="Error-page">
     <img src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="Opps!! somithing went worng"></img>
    <div className="button-error-page"> <Link  to="/"><button >GO TO HOME</button></Link></div>
     <h1>{error.status}:ERROR </h1> 
     </div>
    );
};

export default Error;