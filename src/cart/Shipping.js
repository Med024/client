import React, { Fragment, useState } from "react";
import MetaData from "../Components/Layout/MetaData";
import CheckoutSteps from "./CheckoutSteps";
import "./shipping.css";
import { countries } from "countries-list";

import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../actions/cartActions";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const countriesList = Object.values(countries);

  const navigate = useNavigate();
  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo?.address || ""); // Default to an empty string
  const [city, setCity] = useState(shippingInfo?.city || "");
  const [postalCode, setPostalCode] = useState(shippingInfo?.postalCode || "");
  const [phoneNumber, setPhoneNumber] = useState(
    shippingInfo?.phoneNumber || ""
  );
  const [country, setCountry] = useState(shippingInfo?.country || "");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      saveShippingInfo({ address, city, phoneNumber, postalCode, country })
    );
    navigate("/confirm");
  };

  return (
    <Fragment>
      <MetaData title={"Shipping Info"} />
      <CheckoutSteps  shipping/>
      <div className="shipping ">
        <div className="col-10 col-lg-4">
          <form className="shadow-lg " onSubmit={submitHandler}>
            <h1 className="">Shipping Info</h1>
            <hr/>
            <p>Enter your information </p>
            <div className="form-group">
              <label htmlFor="address_field">Address</label>
              <input
                type="text"
                id="address_field"
                className="custom-input" // Add a custom class
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="city_field">City</label>
              <input
                type="text"
                id="city_field"
                className="custom-input" // Add a custom class
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone_field">Phone No</label>
              <input
                type="phone"
                id="phone_field"
                className=" custom-input" // Add a custom class
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="postal_code_field">Postal Code</label>
              <input
                type="number"
                id="postal_code_field"
                className="custom-input" // Add a custom class
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="country_field">Country</label>
              <select
                id="country_field"
                className="custom-input" // Add a custom class
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                {countriesList.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              id="shipping_btn"
              type="submit"
              className="btn btn-block py-3"
            >
              CONTINUE
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Shipping;
