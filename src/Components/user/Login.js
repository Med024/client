import React, { Fragment, useState, useEffect } from "react";
import Loader from "../Layout/Loader";
import MetaData from "../Layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { login, clearErrors } from "../../actions/userActions";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom"; 

import "./auth.css";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate(); 
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, error, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/me");
    }
  
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, error, navigate, alert]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Login"} />
          <div className="login-form">
            <div className="text">Sign In</div>
            
            <form onSubmit={submitHandler}>
              <div className="field">
                <div className="fas fa-envelope"></div>
                <input
                  htmlFor="email_field"
                  type="text"
                  placeholder="Email or Phone"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="field">
                <div className="fas fa-lock"></div>
                <input
                  htmlFor="password_field"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="login-btn" type="submit">
                LOGIN
              </button>

              <div className="register-link">
                Not a member?
                <Link exact="true" to="/register">
                  Sign up now
                </Link>
                <br></br>
                <div className="forgot-password">
                  <Link exact="true" to="/password/forgot">
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Login;
