import React from "react";
import "./Policy.css";

const ShippingPolicy = () => {
  return (
    <div className="policy-page">
      <div className="container">
        <h1>Shipping Policy</h1>
        <p className="last-updated">Last Updated: 2026</p>

        <section>
          <h2>1. Logistics Partners</h2>
          <p>
            At <strong>AVM Agri Life Science</strong>, we are committed to delivering your agricultural products, biotechnology fertilizers, and plant nutrition inputs safely and on time across India. We partner with reliable nationwide transport and courier aggregators to ensure secure transport.
          </p>
        </section>

        <section>
          <h2>2. Processing & Dispatch</h2>
          <p>
            Standard orders and dealer consignments are typically dispatched within <strong>24 to 48 hours</strong> of order confirmation from our Hyderabad warehousing facilities. We do not dispatch on Sundays or National Holidays.
          </p>
        </section>

        <section>
          <h2>3. Shipping Charges & Delivery Timelines</h2>
          <p>
            Once dispatched, consignments should reach your destination within:
          </p>
          <ul>
            <li><strong>Telangana & Andhra Pradesh:</strong> 2-4 business days.</li>
            <li><strong>Rest of India / Metro Cities:</strong> 5-7 business days.</li>
          </ul>
          <p>Shipping or transport charges, if applicable, are calculated based on shipment weight, volume, and delivery destination.</p>
        </section>

        <section>
          <h2>4. Real-Time Tracking</h2>
          <p>
            Once your order is picked up by our transport/courier partner, you will receive notifications and contact details from our dispatch team to monitor your package's journey.
          </p>
        </section>

        <section>
          <h2>5. Undelivered Shipments</h2>
          <p>
            If a delivery cannot be completed due to an incorrect address or absence, our team will attempt to coordinate re-delivery. Please ensure accurate contact numbers (Farmer / Dealer mobile) are provided when placing orders.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ShippingPolicy;
