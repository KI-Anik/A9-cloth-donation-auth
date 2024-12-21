import { createBrowserRouter } from "react-router-dom";
import HomelLayout from "../components/layout/HomelLayout";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomelLayout></HomelLayout>,
        
    }
])

export default Router