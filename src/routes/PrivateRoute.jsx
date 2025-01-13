import { useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;