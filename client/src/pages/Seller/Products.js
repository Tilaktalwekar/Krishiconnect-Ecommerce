import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import SellerMenu from "../../components/Layout/SellerMenu";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "../../styles/Homepage.css";
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="row dashboard">
        <div className="col-md-3">
          <SellerMenu />
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All Products List</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/seller/product/${p.slug}`}
                className="product-link"
              >
                <div
                  className="card m-2"
                  style={{
                    width: "18rem",
                    backgroundColor: "rgba(128, 128, 128, 0.097)",
                    height: "30rem",
                  }}
                >
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    style={{ height: "20rem" }}
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name.substring(0, 50)}...</h5>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
