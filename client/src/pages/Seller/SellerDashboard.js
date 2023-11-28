import React from "react";
import Layout from "./../../components/Layout";
import { useAuth } from "../../context/auth";
import SellerMenu from "../../components/Layout/SellerMenu";
const SellerDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <SellerMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3> Name : {auth?.user?.name}</h3>
              <h3> Email : {auth?.user?.email}</h3>
              <h3> Contact : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SellerDashboard;
