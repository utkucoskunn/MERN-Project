import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Topbar from './components/topbar/Topbar';
import Sidebar from "./components/sidebar/Sidebar";
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import ListList from "./pages/listList/listList";
import List from './pages/list/List';
import NewList from './pages/newList/NewList';
import {AuthContext} from "./context/authContext/AuthContext";


import './App.css';
import {useContext} from "react";

function App() {
    const {user} = useContext(AuthContext);
    return (
        <BrowserRouter>
            {user && (<Topbar/>)}
            <div className="container">
                {user && (<Sidebar/>)}
                <Routes>
                    <Route path="/" element={user ? <Home/> : <Navigate to="/login"/>}/>
                    <Route path="/users" element={user ? <UserList/> : <Navigate to="/login"/>}/>
                    <Route path="/user/:userId" element={user ? <User/> : <Navigate to="/login"/>}/>
                    <Route path="/newUser" element={user ? <NewUser/> : <Navigate to="/login"/>}/>
                    <Route path="/movies" element={user ? <ProductList/> : <Navigate to="/login"/>}/>
                    <Route path="/lists" element={user ? <ListList/> : <Navigate to="/login"/>}/>
                    <Route path="/lists/:id" element={user ? <List/> : <Navigate to="/login"/>}/>
                    <Route path="/product/:Id" element={user ? <Product/> : <Navigate to="/login"/>}/>
                    <Route path="/product/newproduct" element={user ? <NewProduct/> : <Navigate to="/login"/>}/>
                    <Route path="/lists/newlist" element={user ? <NewList/> : <Navigate to="/login"/>}/>
                    <Route path="/login" element={ !user ? <Login/> : <Navigate to="/"/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
