import RestaruntCard from "./RestaurantCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restarunts){
    const filterdata = restarunts.filter((restarunt)=>
        restarunt?.data?.name?.toLowerCase()?.includes(searchText)
    );
    
    return filterdata;
}


const Body = ()=>{
    const [allRestarunts,setallRestarunts] = useState([]);
    const [filteredRestarunts,setfilteredRestarunts] = useState([]);
    const [searchText , setSearchText] = useState();

    useEffect(()=>{
        //api call
        getRestarunts();
    },[]);
    
    async function getRestarunts(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.612870597159388&lng=79.4437188282609&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setallRestarunts(json?.data?.cards[2]?.data?.data?.cards);//optional chaining
        setfilteredRestarunts(json?.data?.cards[2]?.data?.data?.cards);
    }

    if(!allRestarunts) return null;//early return
    

    return (allRestarunts?.length === 0) ? <Shimmer/> : (
        <>

        <div className="search-container">
            <input
            type="text"
            className="search-input"
            placeholder="search"
            value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value);
            }}></input>
            <button className="search-btn"
            onClick={()=>{
                const data= filterData(searchText,allRestarunts);
                setfilteredRestarunts(data);
            }}>search</button>

        </div>
        <div className="restarunt-list">
       {(filteredRestarunts?.length===0)? <h1>No Restarunt found.....</h1>:
        filteredRestarunts.map((restarunt)=>{
        return <RestaruntCard {...restarunt.data} key={restarunt.data.id} />
       })}
        </div>
        </>
 );
}

export default Body;