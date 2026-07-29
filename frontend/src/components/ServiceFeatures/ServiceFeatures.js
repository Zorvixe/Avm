// src/components/ServiceFeatures.jsx
import React from "react";
import "./ServiceFeatures.css";

// Import images
import shippingImg from "../../assets/bikes-free-shipping.svg";
import exchangeImg from "../../assets/bikes-return.svg";
import supportImg from "../../assets/bikes-24-support.svg";
import paymentImg from "../../assets/bikes-payment.svg";

const ServiceFeatures = () => {
  const features = [
    {
      id: 1,
      title: "FREE & FAST DISPATCH",
      description: "Enjoy prompt shipping and dispatch across India from our Hyderabad warehousing facilities, making dealer and farmer deliveries reliable and hassle-free.",
      image: shippingImg,
      alt: "Fast Dispatch",
      color: "#064e3b"
    },
    {
      id: 2,
      title: "EXCHANGE ASSURANCE",
      description: "We offer hassle-free exchanges within 2 working days for transit-damaged sealed products subject to unboxing video verification protocol.",
      image: exchangeImg,
      alt: "Exchange Assurance",
      color: "#7dd34d"
    },
    {
      id: 3,
      title: "CUSTOMER CARE & SUPPORT",
      description: "Our dedicated agricultural support desk (+91 7981257228) is available Monday to Saturday, from 9 AM to 7 PM, ensuring expert agronomical guidance.",
      image: supportImg,
      alt: "Customer Care",
      color: "#064e3b"
    },
    {
      id: 4,
      title: "SECURE TRANSACTIONS",
      description: "Experience 100% secure payment gateways and verified dealer billing, ensuring transparent transactions and reliable billing every time.",
      image: paymentImg,
      alt: "Secure Transactions",
      color: "#7dd34d"
    }
  ];

  return (
    <section className="service-features-section">
      <div className="container">
        <div className="service-features-header">
          <h2 className="service-features-title">Why Choose AVM Agri Life Science</h2>
          <div className="service-features-line"></div>
          <p className="service-features-subtitle">
            Experience reliable agricultural input supply and dealer services — For Us Farmer is a King 👑
          </p>
        </div>

        <div className="service-features-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="service-feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-image-wrapper">
                <img 
                  src={feature.image} 
                  alt={feature.alt} 
                  className="feature-image"
                  loading="lazy"
                />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-shine"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;