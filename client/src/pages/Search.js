import React from "react";
import { useSearch } from "../context/search";
import Layout from "../components/Layout";
const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Resuts</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div
                className="card m-2"
                style={{
                  width: "18rem",
                  height: "550px",
                  backgroundColor: "rgba(128, 128, 128, 0.097)",
                }}
              >
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  style={{ height: "300px" }}
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name.substring(0, 25)}...</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p
                    className="card-text"
                    style={{ color: "green", fontWeight: "bolder" }}
                  >
                    {" "}
                    ₹ {p.price}
                  </p>
                  <div className="mt-3">
                    <button class="btn btn-success mb-2 ms-1">
                      More Details
                    </button>
                    <button class="btn btn-secondary mb-2 ms-1">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
