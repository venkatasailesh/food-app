import { useState } from "react";
const Section = ({title , description,Isvisible,setIsvisible}) => {
   
    return(
      <div className="border border-black p-2 m-2">
        <h1 className="text-xl font-bold">{title}</h1>
      {Isvisible ?
      (<button onClick={()=>setIsvisible(false)}
      className="cursor-pointer underline">Hide</button>
      )
        :
      (<button onClick={()=>setIsvisible(true)}
        className="cursor-pointer underline">Show</button>
        )}
      {Isvisible && <p>{description}</p>}
      </div>
    );

}

const Instamart = () =>{
   const [IsvisibleSection , setIsvisibleSection] = useState();
  return (
    <div>
    <h1 className="p-2 m-2 text-3xl font-bold"> INSTA MART </h1>
    <Section 
    title = {"About Instamart"}
    description = {"this is insta mart which was desgined by sailesh using react for just an example"} 
    Isvisible = {IsvisibleSection === "about"}
    setIsvisible={()=>setIsvisibleSection("about")}
    />
    
    <Section 
    title = {"Team Instamart"}
    description = {"only me ontari poratam chesthuna motham nene design chesa "} 
    Isvisible = {IsvisibleSection === "team"}
    setIsvisible={()=>setIsvisibleSection("team")}
    />
    
    
  </div>
  );
}

export default Instamart;