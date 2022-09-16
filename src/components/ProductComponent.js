import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allproducts.products);
  return (
    <div className="card-container">
      {products?.map((product) => {
        return (
          <Link to={`product/${product.id}`}>
            <div className="card">
              <div className="img">
                <img src={product.image} />
              </div>
              <div className="content">
                <div className="header">{product.title}</div>
                <div className="price">$ {product.price}</div>
                <div className="category">{product.category}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductComponent;
