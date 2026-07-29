import React from "react";
import "./Policy.css";

const TermsOfService = () => {
  return (
    <div className="policy-page">
      <div className="container">
        <h1>Terms & Conditions</h1>
        <p className="last-updated">Last Updated: 2026</p>

        <section className="premium-policy-text">
          <p>
            “By using our website and purchasing our products, you agree to <strong>AVM Agri Life Science</strong> terms and policies. All agricultural products, prices, and dealer offers are subject to availability. We reserve the right to update or modify our policies at any time without prior notice.”
          </p>
        </section>

        <section>
          <h2>1. Logistics & Fulfillment</h2>
          <p>
            To ensure a reliable delivery experience for farmers and dealers across India, we partner with trusted logistics and transport providers. Dispatch and tracking are managed through our central Hyderabad distribution network.
          </p>
        </section>

        <section>
          <h2>2. Product Availability & Pricing</h2>
          <p>
            All products listed on the site (including growth promoters, biotechnology inputs, and crop protection formulas) are subject to availability. While we strive for accuracy, AVM Agri Life Science reserves the right to correct any pricing errors or cancel orders if a formulation is out of stock.
          </p>
        </section>

        <section>
          <h2>3. Intellectual Property & Formulations</h2>
          <p>
            All original branding, product trademarks (such as WONDER, GOLD, ATTACK, JAGUAR, ROYAL, PROTON, COMA, JAYAM), literature, and scientific formulations are the intellectual property of AVM Agri Life Science. Unauthorized reproduction or commercial counterfeiting is strictly prohibited.
          </p>
        </section>

        <section>
          <h2>4. Jurisdiction</h2>
          <p>
            Any disputes regarding purchases, dealership agreements, or website use shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Hyderabad, Telangana</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
