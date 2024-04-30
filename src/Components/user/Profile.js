import React, { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import MetaData from "../Layout/MetaData";
import Loader from "../Layout/Loader";
import "./Profile.css"; // Make sure to include the necessary styles or update the import path

const Profile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/me");
    }
  }, [navigate, isAuthenticated]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Your Profile"} />
          <div className="container profile">
            <div className="row gutters">
              {/* Left Column */}
              <div className="col-xl-2 col-lg-3 col-md-8 col-sm-8 col-12">
                <div className="card h-100">
                  <div className="card-body ">
                    <figure>
                      <img
                        className="rounded-circle img-fluid"
                        src={
                          user && user.avatar
                            ? user.avatar.url
                            : "avatar_default.png"
                        }
                        alt={user && user.name}
                      />
                    </figure>
                    <div className="text-center mt-3">
                      <h4>Full Name</h4>
                      <p>{user && user.name ? user.name : "N/A"}</p>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="card h-100">
                  <div className="card-body">
                    <h4>Email Address</h4>
                    <p>{user && user.email ? user.email : "N/A"}</p>

                    <h4>Joined On</h4>
                    <p>
                      {user && user.createdAt
                        ? String(user.createdAt).substring(0, 10)
                        : "N/A"}
                    </p>

                    {user && user.role && user.role !== "admin" && (
                      <Link
                        to="/orders/me"
                        className="btn btn-danger btn-block"
                      >
                        My Orders
                      </Link>
                    )}

                    <Link
                      to="/password/update"
                      className="btn btn-primary btn-block"
                    >
                      Change Password
                    </Link>

                    <Link
                      to="/me/update"
                      id="edit_profile"
                      className="btn btn-primary btn-block"
                    >
                      Edit Profile
                    </Link>
                      
                    {/*  <div className="text-right">
                      <button type="button" className="btn btn-primary" onClick={update user }>
                        Update
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
