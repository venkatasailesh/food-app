import RestaruntCard from "./RestaurantCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import{filterData} from "../utils/helper.js";
import {FETCH_API_CALL} from "../config.js";
import useOnline from "../utils/useOnline";



const Body = ()=>{
    const [allRestarunts,setallRestarunts] = useState([]);
    const [filteredRestarunts,setfilteredRestarunts] = useState([]);
    const [searchText , setSearchText] = useState();

    
    
    useEffect(()=>{
        //api call
        getRestarunts();
    },[]);
    
    async function getRestarunts(){
        const data = await fetch(FETCH_API_CALL);
        const json = await data.json();
        setallRestarunts(json?.data?.cards[2]?.data?.data?.cards);//optional chaining
        setfilteredRestarunts(json?.data?.cards[2]?.data?.data?.cards);
    }
    
    const isonline = useOnline();
    if (!isonline){
        return <h1>YOUR IN OFFLINE GO AND CHECK YOUR INTERNET CONNECTION...</h1>;
    }

    if(!allRestarunts) return null; //early return
    

    return (allRestarunts?.length === 0) ? <Shimmer/> : (
        <>

        <div className="p-5 bg-pink-50 my-4 ">
            <input
            type="text"
            className="p-2 border-solid border-black shadow-lg "
            placeholder="search "
            value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value);
            }}></input>
            <button className="p-2 ml-3  bg-green-900 hover:bg-gray-400 hover:text-red-500 text-white rounded-md" 
            onClick={()=>{
                const data= filterData(searchText,allRestarunts);
                setfilteredRestarunts(data);
            }}>search</button>

        </div>
        <div className="flex flex-wrap justify-around">
       {(filteredRestarunts?.length===0)? <h1>No Restarunt found.....</h1>:
        filteredRestarunts.map((restarunt)=>{
        return <RestaruntCard {...restarunt.data} key={restarunt.data.id} />
       })}
        </div>
        </>
 );
}

export default Body;