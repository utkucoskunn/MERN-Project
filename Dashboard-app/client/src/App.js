import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "../src/pages/Auth/Signin/index";
import Dashboard from "../src/pages/Dashboard";
import ProtectedRoute from "../src/pages/ProtectedRoute";
import CategoryManagement from "../src/pages/CategoryManagement";
import ProductManagement from "./pages/ProductManagement";
import Products from "./pages/Products";

import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={
                        <ProtectedRoute>
                            {<Dashboard/>}
                        </ProtectedRoute>}/>
                    <Route path="dashboard" element={
                        <ProtectedRoute>
                            {<Dashboard/>}
                        </ProtectedRoute>}>
                    </Route>
                    <Route path="login" element={<SignIn/>}/>
                    <Route path="categorymanagement" element={<CategoryManagement/>}/>
                    <Route path="productmanagement" element={<ProductManagement/>}/>
                    <Route path="products" element={<Products/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
        ;
}

export default App;



