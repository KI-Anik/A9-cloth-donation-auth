import { createBrowserRouter } from "react-router-dom";
import HomelLayout from "../components/layout/HomelLayout";
import Donation from "../components/Pages/Donation";
import Details from "../components/Pages/Details";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomelLayout></HomelLayout>,
    },
    {
        path: 'donation',
        element: <Donation></Donation>
    },
    {
        path: 'details/:id',
        loader: () => fetch('fakeData.json'),
        element: <Details></Details>
    }

])

export default Router