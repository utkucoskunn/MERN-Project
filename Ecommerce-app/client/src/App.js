import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "../src/pages/Auth/Signin/index"
import Signup from "../src/pages/Auth/Signup/index"
import Products from "../src/pages/Products/index"
import ProductDetail from "../src/pages/ProductDetail/index"
import Profile from "../src/pages/Profile"
import ProtectedRoute from "../src/pages/ProtectedRoute"

function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Navbar/>}>
                    <Route path="signin" element={<Signin/>}/>
                    <Route path="signup" element={<Signup/>}/>
                    <Route path="products" element={<Products/>}/>
                    <Route path="product/:product_id" element={<ProductDetail/>}/>
                    <Route path="profile"
                           element={
                               <ProtectedRoute>
                                   {<Profile/>}
                               </ProtectedRoute>
                           }
                    />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}


export default App;
