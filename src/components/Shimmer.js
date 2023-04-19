const Shimmer = () =>{
    return(
        <div className="flex flex-wrap justify-around">
            {Array(15)
            .fill("")
            .map((e,index) => (<div key={index} className=" p-3 m-3 mt-32 w-52 h-80 bg-gray-300 justify-around">
                <div className="w-[185px] h-32  bg-gray-400">
                    </div> 
                    </div>
           ) )}
    </div>
    );
}
export default Shimmer;