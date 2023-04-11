const Shimmer = () =>{
    return(
        <div className="restarunt-list">
            {Array(15)
            .fill("")
            .map((e,index) => (<div key={index} className="shimmer-card">
                <div className="shimmer-pic-card">
                    </div> 
                    </div>
           ) )}
    </div>
    );
}
export default Shimmer;