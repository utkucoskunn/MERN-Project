import {Route, Navigate} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";

function ProtectedRoute({children}) {
    const {loggedIn} = useAuth();

    return (loggedIn ? children : <Navigate to="/"/>)
}

export default ProtectedRoute;