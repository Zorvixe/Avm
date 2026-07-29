import React from "react";
import "./Policy.css";

const ExchangePolicy = () => {
  return (
    <div className="policy-page">
      <div className="container">
        <h1>Exchange Policy</h1>
        <p className="last-updated">Last Updated: 2026</p>

        <section className="premium-policy-text">
          <p>
            “At <strong>AVM Agri Life Science</strong>, we offer exchange options to ensure farmer and dealer satisfaction. Exchanges are accepted only if an unboxing video is recorded and shared. The product container/package must be unopened, unused, and in its original sealed condition. Requests without a proper opening video will not be accepted.”
          </p>
        </section>

        <section>
          <h2>1. Eligibility for Exchange</h2>
          <p>Exchanges are strictly accepted only in the following cases:</p>
          <ul>
            <li>Products damaged or leaking during transit.</li>
            <li>Manufacturing defect in packaging or seal.</li>
            <li>Incorrect product or formulation sent (different from your order).</li>
          </ul>
          <p><strong>Timeframe:</strong> Exchange requests must be submitted within <strong>2 days</strong> of delivery of the agricultural product.</p>
        </section>

        <section>
          <h2>2. Non-Acceptable Reasons</h2>
          <p>Exchanges are <strong>not</strong> accepted for:</p>
          <ul>
            <li>Opened or used bottles, bags, or packets.</li>
            <li>Improper storage after delivery.</li>
            <li>Personal preference or incorrect product ordered by mistake.</li>
          </ul>
        </section>

        <section>
          <h2>3. Shipping Policy for Exchanges</h2>
          <ul>
            <li><strong>First Exchange:</strong> We provide <strong>Free Shipping</strong> for valid exchange requests due to transit damage or incorrect shipment.</li>
            <li><strong>Subsequent Exchanges:</strong> Any further exchange requests for the same order will incur applicable logistics charges.</li>
          </ul>
        </section>

        <section className="highlight-box">
          <h2>4. Essential Requirements</h2>
          <p>To process any return or exchange request, you must provide:</p>
          <ul>
            <li><strong>Unboxing Video:</strong> A continuous video clearly showing the sealed package being opened and the damage/leakage at the time of opening.</li>
            <li><strong>Photographs:</strong> Clear photographs of the damaged container and batch number.</li>
            <li><strong>Order Details:</strong> Your Order Number, Dealer/Farmer Name, and Contact Number.</li>
          </ul>
          <div className="alert-important">
            <i className="bi bi-exclamation-triangle-fill"></i> <strong>Important:</strong> Requests without a clear, unedited unboxing video will <strong>not</strong> be considered for exchange.
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExchangePolicy;
