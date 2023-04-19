import { IMG_CDN_URL } from "../config.js";


const RestaruntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    area,
    totalRatingsString,

})=>{
    return(
        <div className="w-52 p-3 m-3 shadow-xl bg-pink-50">
         <img src={IMG_CDN_URL+cloudinaryImageId}></img>
         <h2 className="font-bold text-xl">{name}</h2>
         <h4>{cuisines.join(", ")} </h4> 
         <h4>{area} </h4> 
        <h4>{totalRatingsString}</h4>

         </div>
    );
    //where if want exact notation for width or anything you to give in [200px] notation
}
export default RestaruntCard;