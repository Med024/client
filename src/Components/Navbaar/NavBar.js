import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Dropdown } from "react-bootstrap"; // Import Dropdown component

import { logout } from "../../actions/userActions";

import "./navbar.css";
import { HamburgetMenuClose, HamburgetMenuOpen, ShoppingCart } from "./Icons";
import Search from "../Layout/Search";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleClick = () => setClick(!click);
  const handleAvatarClick = () => setDropdownOpen(!dropdownOpen);

  const alert = useAlert();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const logouHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link exact="true" to="" className="nav-logo">
          <img src="/OFAAX40E.png " alt="Logo" />
        </Link>
        
        <ul className={`nav-menu ${click ? "active" : ""}`}>
          <li className="nav-item">
            <Link exact="true" to="/" className="nav-links">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link exact="true"  to='/products' className="nav-links">
              
              Products
            </Link>
          </li>

          <li className="shopcart">
            <Link exact="true" to="/cart">
              <span className="icon-cart">
                <ShoppingCart />
              </span>
              <span className="cart-quantity">{cartItems.length}</span>
            </Link>
          </li>
          <Search />
        </ul>

        <div className="nav-icon" onClick={handleClick}>
          {click ? (
            <span className="icon">
              <HamburgetMenuOpen />
            </span>
          ) : (
            <span className="icon">
              <HamburgetMenuClose />
            </span>
          )}
        </div>

        <li className="nav-item2">
          {user ? (
            <Dropdown show={dropdownOpen} onClick={handleAvatarClick}>
              <Dropdown.Toggle className="toggle-button">
                <div className="">
                  <img
                    src={user.avatar && user.avatar.url}
                    alt={user && user.name}
                    className="custom-avatar-img"
                  />
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Profile: {user && user.name}</Dropdown.Item>
                {user && user.role !== "admin" ? (
                  <Link className="dropdown-item" to="/orders/me">
                    Orders
                  </Link>
                ) : (
                  <Link className="dropdown-item" to="/dashboard">
                    Dashboard
                  </Link>
                )}

                <Link className="dropdown-item" to="/me">
                  Profile
                </Link>

                <Dropdown.Item>
                  <div style={{color:'red'}} onClick={logouHandler}> Logout</div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            !loading && (
              <Link exact="true" to="/login" className="nav-links">
                Login
              </Link>
            )
          )}
        </li>
      </div>
    </nav>
  );
};

export default NavBar;
