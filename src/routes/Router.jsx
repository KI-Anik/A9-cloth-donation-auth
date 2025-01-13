import { createBrowserRouter } from "react-router-dom";
import HomelLayout from "../components/layout/HomelLayout";
import Cards from "../components/Pages/Cards";
import Details from "../components/Pages/Details";
import PrivateRoute from "./PrivateRoute";
import AuthLayout from "../components/layout/AuthLayout";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomelLayout></HomelLayout>,
    },
    {
        path: 'donationCards',
        element: <Cards></Cards>
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
    }
    

])

export default Router