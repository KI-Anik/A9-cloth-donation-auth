import { createBrowserRouter } from "react-router-dom";
import HomelLayout from "../components/layout/HomelLayout";
import Details from "../components/Pages/Details";
import PrivateRoute from "./PrivateRoute";
import AuthLayout from "../components/layout/AuthLayout";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import DonationCam from "../components/Pages/DonationCam";
import Error from "../components/Pages/Error";
import Help from "../components/Pages/Help";
import DashBoard from "../components/Pages/DashBoard";
import Home from "../components/Home";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomelLayout></HomelLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'donationCam',
                element: <DonationCam></DonationCam>
            },
            {
                path: 'details/:id',
                element: <PrivateRoute>
                    <Details></Details>
                </PrivateRoute>,
                loader: async () => {
                    const response = await fetch('/fakeData.json');
                    return response.json();
                }
            },
            {
                path: 'help',
                element: <Help></Help>
            },
            {
                path: 'dashboard',
                element: <DashBoard></DashBoard>
            },
        ]
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },

    {
        path: '*',
        element: <Error></Error>
    }


])

export default Router