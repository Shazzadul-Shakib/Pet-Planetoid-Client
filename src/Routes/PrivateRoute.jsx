import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Loader from "../Components/Shared/Loader/Loader";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // from is if there is any state that should go or it willredirect to home page
    if(loading){
        return <Loader/>
    }
    if (user?.emailVerified){
        return children;
    }
     
    return (
      <div>
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
      </div>
    );
};

export default PrivateRoute;