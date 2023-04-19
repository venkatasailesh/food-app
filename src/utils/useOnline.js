import { useEffect, useState } from "react";

const useOnline = () => {
    const [isonline, setIsonline] = useState(true);

    useEffect(()=>{
        const handleOnline = () => {
            setIsonline(true);
        };
        const handleOffline = () => {
            setIsonline(false);
        };
    
        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);

        return () => {
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        };
}, []);

     return isonline;
};

 export default useOnline;