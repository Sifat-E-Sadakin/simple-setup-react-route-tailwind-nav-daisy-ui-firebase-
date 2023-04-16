import React, { useContext } from 'react';
import { userContext } from './UserProvider/UserProvider';

const Home = () => {

    let user = useContext(userContext)
    return (
        <div>
            <h1>Hi {user && user.displayName}</h1>
            
        </div>
    );
};

export default Home;