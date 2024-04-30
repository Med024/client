import React, { Fragment, useEffect, useState } from "react";
import "./ProductDetails.css";
import MetaData from "../Layout/MetaData";
import Loader from "../Layout/Loader";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { getproductDetails, clearErrors } from "../../actions/productActions";
import { useParams } from "react-router-dom";
import { addItemToCart } from "../../actions/cartActions";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const alert = useAlert();

  const { loading, error, product } = useSelector((state) => state.productDetails);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getproductDetails(params.id));
  }, [dispatch, params.id, error, alert]);

  const increaseQty = () => {
    const count = document.querySelector('.count')
    if (count.valueAsNumber >= product.stock) return

    const qty = count.valueAsNumber+1 
    setQuantity(qty)

  }
  const decreaseQty = () => {
    const count = document.querySelector('.count')
    if (count.valueAsNumber <= 1) return

    const qty = count.valueAsNumber -1 
    setQuantity(qty)
  }


  const addToCart = () => {
    dispatch(addItemToCart(params.id, quantity));
    alert.success('Item Added to cart :)');
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={product.name} />
          <div className=" container-fluid mt-5">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-4 " id="product_image">
                {product.images && product.images.length > 0 ? (
                  <img src={product.images[0].url} alt={product.title} height="400 " width="422 " />
                ) : (
                  <p>No image available</p>
                )}
              </div>

              <div className="col-12 col-lg-5 mt-5">
                <h3>{product.name}</h3>
                <p id="product_id"> Product # {product._id}</p>
                <hr />

                <p id="product_price">
                  ${product.price}
                  <span className="DT">dt</span>
                </p>
                <div className="stockCounter d-inline">
                  <span className="btn-grad btn btn-primary btn-sm" onClick={decreaseQty}>
                    -
                  </span>
                  <input
                    type="number"
                    className="form-control count d-inline"
                    value={quantity}
                    readOnly
                  />
                  <span className="btn-grad btn btn-primary btn-sm" onClick={increaseQty}>
                    +
                  </span>
                </div>
                <button
                  type="button"
                  id="cart_btn"
                  className="btn-grad btn btn-primary btn-sm"
                  disabled={product.stock === 0}
                  onClick={addToCart}
                >
                  Add to Cart
                </button>

                <hr />

                <p>
                  Status:{" "}
                  <span
                    id="stock_status"
                    className={product.stock > 0 ? "greenColor" : "redColor"}
                  >
                    {product.stock > 0 ? "In Stock" : "Out of stock"}
                  </span>
                </p>

                <hr />

                <h4 className="mt-2">Description:</h4>
                <p>{product.description}</p>

                <p id="product_seller mb-3">
                  Sold by: <strong>{product.seller}</strong>
                </p>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
