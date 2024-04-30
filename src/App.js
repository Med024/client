import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Navbaar/NavBar";
import Home from "./Home/Home";
import Login from "./Components/user/Login";
import Register from "./Components/user/Register";
import ProductDetails from "./Components/Product/ProductDetails";
import { loadUser } from "./actions/userActions";
import Profile from "./Components/user/Profile";
import Cart from "./cart/Cart";
import Shipping from "./cart/Shipping";
import store from "./store";
import ProtectRoute from "./Components/Route/ProtectedRoute";
import Products from "./Home/Products";
import UpdateProfile from "./Components/user/UpdateProfile";


function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />

            <Route path="/search/:keyword" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          <Route element={<ProtectRoute/>}>
          <Route
            path="/shipping"
            element={<Shipping />} />
           <Route
              path="/me"
              element={<Profile />}/>
               <Route
            path="/me/update"
            element={<UpdateProfile />} />

          </Route>

            <Route path="/login" element={<Login />} />
           
            <Route path="/register" element={<Register />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;