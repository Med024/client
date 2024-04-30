import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemsFromCart } from "../actions/cartActions";
import MetaData from "../Components/Layout/MetaData";

import "./cart.css"; // Import your CSS file
import { TrashIcon } from "../Components/Navbaar/Icons";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  //Plus
  const increaseQty = (id, quantity, stock) => {
    const newQty = quantity + 1;

    if (newQty > stock) return;
    dispatch(addItemToCart(id, newQty));
  };
  //Minus
  const decreaseQty = (id, quantity) => {
    const newQty = quantity - 1;

    if (newQty <= 0) return;
    dispatch(addItemToCart(id, newQty));
  };

  const deleteCartItem = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/shipping");
  };

  return (
    <Fragment>
      <MetaData title={"Your cart"} />
      {cartItems.length === 0 ? (
        <h2 className="mt-5">Your Cart is Empty</h2>
      ) : (
        <Fragment>
          <div className="container cart">
            <h2 className="cart-title">
              Your Cart: <b>{cartItems.length} Items</b>
            </h2>
            <div className="cart-items-container">
              <div className="cart-items-list">
                {cartItems.map((item) => (
                  <Fragment key={item.product}>
                    <hr />
                    <div className="cart-item">
                      <div className="item-image">
                        <img
                          src={item.image}
                          alt="Laptop"
                          height="90"
                          width="115"
                        />
                      </div>

                      <div className="item-details">
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </div>

                      <div className="DT item-price">
                        <p id="card_item_price ">{item.price} DT </p>
                      </div>

                      <div className="item-quantity">
                        <div className="quantity-controls">
                          <span
                            className="btn btn-danger minus"
                            onClick={() =>
                              decreaseQty(item.product, item.quantity)
                            }
                          >
                            -
                          </span>
                          <input
                            type="number"
                            size="1"
                            className="form-control count "
                            value={item.quantity}
                            readOnly
                          />
                          <span
                            className="btn btn-primary plus"
                            onClick={() =>
                              increaseQty(
                                item.product,
                                item.quantity,
                                item.stock
                              )
                            }
                          >
                            +
                          </span>
                        </div>
                      </div>

                      <div
                        className="item-delete "
                        onClick={() => deleteCartItem(item.product)}
                      >
                        <TrashIcon />
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>

              <div className="order-summary-container col-12 col-lg-3 my-4">
                <div id="order_summary">
                  <h4>Order Summary</h4>
                  <hr />
                  <p>
                    Subtotal:
                    <span className="order-summary-values">
                      {" "}
                      {cartItems.reduce(
                        (acc, item) => acc + Number(item.quantity),
                        0
                      )}{" "}
                      (Units)
                    </span>
                  </p>
                  <p>
                    Total:{" "}
                    <span className="order-summary-values">
                      {" "}
                      {cartItems
                        .reduce(
                          (acc, item) => acc + item.quantity * item.price,
                          0
                        )
                        .toFixed(2)}{" "}
                      dt
                    </span>
                  </p>

                  <hr />
                  <button id="testbutton" onClick={checkoutHandler}>
                    Check out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
