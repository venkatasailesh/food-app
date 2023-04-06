import { IMG_CDN_URL } from "../config.js";


const RestaruntCard = ({
    name,
    cuisines,
    cloudinaryImageId,

})=>{
    return(
        <div className="card">
         <img src={IMG_CDN_URL+cloudinaryImageId}></img>
         <h2>{name}</h2>
         <h4>{cuisines.join(", ")} </h4> 
         </div>
    );
}
export default RestaruntCard;