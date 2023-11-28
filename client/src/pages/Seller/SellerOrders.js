import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import SellerMenu from "../../components/Layout/SellerMenu";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { Select } from "antd";
import Layout from "../../components/Layout";
const { Option } = Select;

const SellerOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "deliverd",
    "cancel",
  ]);
  const [changeStatus, setCHangeStatus] = useState("");
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/all-orders");
      setOrders(data);
      // console.log(data._id)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(`/api/v1/auth/order-status/${orderId}`, {
        status: value,
      });
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"All Orders Data"}>
      <div className="container-flui p-3 m-3 dashboard">
        <div className="row ">
          <div className="col-md-3">
            <SellerMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center" style={{ color: "#1c8c59" }}>
              All Orders
            </h1>
            {orders
              ?.filter(
                (o) =>
                  o?.buyer?._id !== auth?.user?.id &&
                  o?.sellerid === auth?.user?.email
              )
              .map((o, i) => {
                return (
                  <div className="border shadow">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Status</th>
                          <th scope="col">Buyer</th>
                          <th scope="col">Date</th>
                          <th scope="col">Payment</th>
                          <th scope="col">Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{i + 1}</td>
                          <td>
                            <Select
                              bordered={false}
                              onChange={(value) => handleChange(o._id, value)}
                              defaultValue={o?.status}
                            >
                              {status.map((s, i) => (
                                <Option key={i} value={s}>
                                  {s}
                                </Option>
                              ))}
                            </Select>
                          </td>
                          <td>{o?.buyer?.name}</td>
                          <td>{moment(o?.createAt).fromNow()}</td>
                          <td>{o?.payment.success ? "Success" : "Failed"}</td>
                          <td>{o?.products?.length}</td>
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

export default SellerOrders;
