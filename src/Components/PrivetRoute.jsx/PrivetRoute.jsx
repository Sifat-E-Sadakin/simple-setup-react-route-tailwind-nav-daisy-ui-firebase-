import React, { useContext } from 'react';
import { userContext } from '../UserProvider/UserProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {

    let {user, loading} = useContext(userContext);

    if(loading){
        return <Navigate to="/login" replace={true} />
        ;
    }

    if(user){
        return children;
    }

    
    return <Navigate to="/login" replace={true} />

          
          
};

export default PrivetRoute;