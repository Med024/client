import React, { Fragment, useState, useEffect } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../../actions/userActions";
import MetaData from "../Layout/MetaData";
import Loader from "../Layout/Loader";
import { useAlert } from "react-alert";


const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState("/avatar_default.png");


  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, error, navigate,alert]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", user.name);
    formData.set("email", user.email);
    formData.set("password", user.password);
    formData.append("avatar", avatar);

    dispatch(register(formData));
  };

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result)
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
      <MetaData title={"Register User"} />

      <div className="login-form">
        <div className="text">Sign Up</div>
        <form onSubmit={submitHandler}>
          <div className="field">
            <div className="fas fa-user"></div>
            <input
              htmlFor="name_field"
              type="text"
              placeholder="Username"
              name="name"
              value={user.name}
              onChange={onChange}
            />
          </div>
          <div className="field">
            <div className="fas fa-envelope"></div>
            <input
              htmlFor="email_field"
              type="text"
              placeholder="Email or Phone"
              name="email"
              value={user.email}
              onChange={onChange}
            />
          </div>
          <div className="field">
            <div className="fas fa-lock"></div>
            <input
              htmlFor="password_field"
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={onChange}
            />
          </div>
          <div className="field-2">
            <span>Avatar: </span>
            <div className="fas fa-image"></div>
            <input
              className="customFile-input"
              htmlFor="customFile"
              type="file"
              accept="image/*"
              id="customFile"
              name="avatar"
              onChange={onChange}
            />
          </div>
          <div className="avatar-preview">
            <img src={avatarPreview} alt="Avatar Preview" />
          </div>

          <button
            className="login-btn"
            type="submit"
            disabled={loading ? true : false}
          >
            REGISTER
          </button>

          <div className="register-link">
            Already a member?
            <Link to="/login" exact="true">
              Login now
            </Link>
          </div>
        </form>
      </div>
      </Fragment>
      )}

    </Fragment>
  );
};

export default Register;
