import React, { Fragment, useEffect } from "react";
import MetaData from "../Components/Layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import "./Home.css";
import Product from "../Components/Product/Product";
import Loader from "../Components/Layout/Loader";
import { useParams } from "react-router-dom";


const Home = () => {
  const dispatch = useDispatch();
  let params = useParams();

  const { products, loading, error } = useSelector((state) => state.products);

  const keyword = params.keyword;

  useEffect(() => {
    if (error) {
      alert.error(error);      
    }

    dispatch(getProducts(keyword));
  }, [dispatch, error,keyword ]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Buy Best Products Online"} />

          <h2 style={{ color: "white" }}>Popular Products</h2>

          <div className="popular">
            {keyword ? (
              <Fragment>
                  <div className="col-6 col-md-9">
                    <div>
                      {products &&
                        products.map((product) => (
                          <Product key={product._id} product={product} />
                        ))}
                    </div>
                  </div>
              </Fragment>
            ) : (
              products &&
              products.map((product) => (
                <Product key={product._id} product={product} />
              ))
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
