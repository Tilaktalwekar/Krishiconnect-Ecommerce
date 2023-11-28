import React, { useState, useEffect } from "react";
import SellerMenu from "../../components/Layout/SellerMenu";
import Layout from "../../components/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);
  return (
    <Layout title={"Your Orders"}>
      <div className="container-flui p-3 m-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <SellerMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center" style={{ color: "#1c8c59" }}>
              My Orders
            </h1>
            {orders?.map((o, i) => {
              return (
                <div className="border shadow">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col"> Date</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ color: "green", fontWeight: "500" }}>
                          {i + 1}
                        </td>
                        <td style={{ color: "green", fontWeight: "500" }}>
                          {o?.status}
                        </td>
                        <td style={{ color: "green", fontWeight: "500" }}>
                          {o?.buyer?.name}
                        </td>
                        <td style={{ color: "green", fontWeight: "500" }}>
                          {moment(o?.createAt).fromNow()}
                        </td>
                        <td style={{ color: "green", fontWeight: "500" }}>
                          {o?.payment.success ? "Success" : "Failed"}
                        </td>
                        <td style={{ color: "green", fontWeight: "500" }}>
                          {o?.products?.length}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="container">
                    {o?.products?.map((p, i) => (
                      <div className="row mb-2 p-3 card flex-row" key={p._id}>
                        <div className="col-md-4">
                          <img
                            src={`/api/v1/product/product-photo/${p._id}`}
                            className="card-img-top"
                            style={{
                              backgroundColor: "rgba(128, 128, 128, 0.097)",
                            }}
                            alt={p.name}
                            width="100px"
                            height={"200px"}
                          />
                        </div>
                        <div
                          className="col-md-8"
                          style={{
                            backgroundColor: "rgba(128, 128, 128, 0.097)",
                            // backgroundColor: "#Def2e4",
                          }}
                        >
                          <label style={{ fontWeight: "bold" }}>Name:</label>
                          <p>{p.name}</p>
                          <label style={{ fontWeight: "bold" }}>
                            Description:
                          </label>
                          <p>{p.description.substring(0, 30)}...</p>
                          <p style={{ color: "green", fontWeight: "bold" }}>
                            Price : ₹{p.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyOrders;
