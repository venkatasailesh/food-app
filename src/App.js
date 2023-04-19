import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
// the import written in brackets is named import 
// the import written in noram is default import

const Instamart = lazy(()=> import("./components/Instamart.js"));
const About = lazy(()=> import ("./components/About.js"));

//this is lazy loading or dynamic import 


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
                element:( 
                <Suspense fallback={<h1>Loding....</h1>}>
                    <About />
                </Suspense>
                ),
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
            {
                path:"/instamart",
                element: (
                <Suspense fallback={<h1>Loding....</h1>}> 
                    <Instamart />
                </Suspense>
                ),
                // we can send a prop "fallback={}" in suspense where it is used- 
                //- for showing anything before loading anything
            },
            
           
        ],
    },
    
]);

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);