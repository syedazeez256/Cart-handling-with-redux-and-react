import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectedProducts,
  removeSelectedProducts,
} from "../redux/action/product_action";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log({ product });

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log("Error", err));
    dispatch(selectedProducts(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);

  return (
    <div>
      <div className="card-detail">
        <div className="img-detail">
          <img src={product?.image} />
        </div>
        <div className="content-detail">
          <div className="header-detail">{product?.title}</div>
          <div className="category-detail">{product?.category}</div>
          <div className="price-detail">$ {product?.price}</div>
          <div className="description-detail">{product?.description}</div>
          <button className="btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
