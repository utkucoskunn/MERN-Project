import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import "./app.scss";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import RegisterFull from "./pages/registerFull/RegisterFull";

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "./context/authContext/AuthContext";


const App = () => {
    const {user} = useContext(AuthContext);

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={user ? <Home/> : <Navigate to="/register"/>}/>
                    <Route path="/register" element={!user ? <Register/> : <Navigate to="/"/>}/>
                    <Route path="/login" element={!user ? <Login/> : <Navigate to="/"/>}/>
                    <Route path="/registerfull" element={<RegisterFull/>}/>
                    <Route path="/movies" element={user ? <Home type="movies"/> : <Navigate to="/register"/>}/>
                    <Route path="/series" element={user ? <Home type="Series"/> : <Navigate to="/register"/>}/>
                    <Route path="/watch" element={user ? <Watch/> : <Navigate to="/register"/>}/>

                </Routes>
            </div>
        </BrowserRouter>

    )
}
export default App;

