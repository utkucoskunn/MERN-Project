import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import {AuthContextProvider} from "./context/authContext/AuthContext";
import {MovieContextProvider} from "./context/movieContext/MovieContex";
import {ListContextProvider} from "./context/listContext/ListContex";
import {UserContextProvider} from "./context/userContext/UserContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <UserContextProvider>
            <AuthContextProvider>
                <MovieContextProvider>
                    <ListContextProvider>

                        <App/>

                    </ListContextProvider>
                </MovieContextProvider>
            </AuthContextProvider>
        </UserContextProvider>
    </React.Fragment>
);