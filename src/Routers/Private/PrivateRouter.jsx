import { useContext } from "react";
import { AuthContext } from "../../Prividers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouter = ({children}) => {
    const {users, loader} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    if(loader){
        return <progress className="progress w-56"></progress>
    }

    if(users?.email){
        return children
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>;
};

export default PrivateRouter;