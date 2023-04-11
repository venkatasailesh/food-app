import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import ProfileClass from "./components/ProfileClass.js";
// the import written in brackets is named import 
// the import written in noram is default import


const AppLayout = () =>{
    return(
    <>
    <Header/>
{/* outlet was imported from react router dom whrere for routing from one place to another */}
    <Outlet /> 
    <Footer />
    </>
);
}

const AppRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Error />,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<About />,
                // children:[    here we can nest the route like this..
                //     {
                //         path:"profile",
                //         element:<ProfileClass />,
                //     },
                // ],
            },
            {
                path:"/contact",
                element:<Contact />,
            },
            
           
        ],
    },
    
]);

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);