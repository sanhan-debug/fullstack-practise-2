import AddForm from "../Pages/AddForm";
import Home from "../Pages/Home";
import Root from "../Pages/Root";


const ROUTES = [
    {
        path:"/",
        element:<Root/>,
        children : [
            {
                path:"",
                element:<Home/>
            },
            {
                path:"addpage",
                element:<AddForm/>
            }
        ]
    }
]

export default ROUTES