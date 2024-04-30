import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Components/Layout/Loader';
import MetaData from '../Components/Layout/MetaData';
import { getProducts } from '../actions/productActions';
import Product from '../Components/Product/Product'; // Corrected typo here

const Products = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
    }

    dispatch(getProducts());
  }, [dispatch, error]);

  return (
    <div>
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <MetaData title={"Buy Best Products Online"} />
            <h6 style={{ color: "white" }}>All Products</h6>

            <div className="popular">
              <Fragment>
                <div className="col-6 col-md-8">
                  <div>
                    {products &&
                      products.map((product) => (
                        <Product key={product._id} product={product} />
                      ))}
                  </div>
                </div>
              </Fragment>
            </div>
          </Fragment>
        )}
      </Fragment>
    </div>
  );
};

export default Products;
