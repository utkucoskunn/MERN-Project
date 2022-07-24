import React from 'react';
import {useAuth} from '../../contexts/AuthContext';
import {Button, Text} from '@chakra-ui/react';
import {useNavigate} from "react-router-dom";

function Profile({history}) {
    const {user, logout} = useAuth();
    let navigate = useNavigate();

    const handleLogout = async () => {
        logout();
        await navigate("/", {replace: true});
    }

    return (
        <div>
            <h2> Profile</h2>
            <code>
                {JSON.stringify(user)}
            </code>
            <br/><br/>
            <Button colorScheme="pink" variant="solid" onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}

export default Profile;