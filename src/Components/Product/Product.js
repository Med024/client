import React from "react";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";
import "./Product.css"; // Make sure to include the necessary styles or update the import path

const Product = ({ product }) => {


  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-center row">
          <div className="col-md-10">
            <div className="row p-2 bg-black-transparent border rounded product-card">
              {" "}
              {/* Apply the new class here */}
              <div className="col-md-3 mt-1">
                <div className="product-image-container">
                  <img
                    className="img-fluid img-responsive rounded product-image"
                    src={product.images[0].url}
                    alt={product.name}
                  />
                </div>
              </div>
              <div className="col-md-6 mt-1">
                <h5>{product.name}</h5>
                <div className="d-flex flex-row">
                  <div className="ratings mr-2">
                    <StarRating rating={product.ratings} />
                  </div>
                  <span className="reviewss">
                    ( {product.numOfReviews} Reviews )
                  </span>
                </div>
                <p className="text-justify text-truncate para mb-0">
                  {product.description}
                </p>
              </div>
              <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                <div className="d-flex flex-row align-items-center">
                  <h4 className="mr-1">
                    {product.price}
                    <span className="DT">dt</span>
                  </h4>
                </div>
                <h6 className="text-success">Free shipping</h6>
                <div className="d-flex  mt-4">
                  <Link to={`/product/${product._id}`}>
                    {" "}
                    <button className="btn-grad btn btn-primary btn-sm" type="button">
                      Details
                    </button>
                    {/* Add any additional content for product details */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
