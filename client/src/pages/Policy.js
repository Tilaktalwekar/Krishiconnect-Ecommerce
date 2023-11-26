import React from "react";
import Layout from "../components/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contact.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            At KrishiConnect Ecommerce, we understand that your privacy is
            important. This Privacy Policy outlines how we collect, use,
            disclose, and protect your personal information when you use our
            website and services. By using our platform, you agree to the
            practices described in this policy.
          </p>

          <p>1. Information We Collect</p>

          <p>
            1.1 Personal Information We may collect the following personal
            information when you interact with our platform: Full Name Contact
            Information: Email Address, Phone Number Shipping and Billing
            Address Financial Information (if applicable, e.g., for payment
            processing)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
