import React from "react";
import "./Policy.css";

const PrivacyPolicy = () => {
  return (
    <div className="policy-page">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: 2026</p>

        <section className="premium-policy-text">
          <p>
            “At <strong>AVM Agri Life Science</strong>, your privacy is our priority. We ensure that all farmer and dealer personal information is securely protected and used only to enhance your experience with our agricultural products and services. Your details are never shared with unauthorized third parties.”
          </p>
        </section>

        <section>
          <h2>1. Information We Collect</h2>
          <p>
            To provide seamless customer care and dealer support, we collect essential details such as your name, shipping address, mobile number, and email. This information is collected only when you place an inquiry/order, register as a dealer, or contact our agricultural helpdesk.
          </p>
        </section>

        <section>
          <h2>2. How We Use Your Data</h2>
          <p>
            Your data is used to process orders, coordinate deliveries via our logistics partners, and provide customized crop nutrition recommendations. We may also use your contact details to share updates on new high-yield biotechnology formulations and dealer schemes.
          </p>
        </section>

        <section>
          <h2>3. Cookies and Tracking</h2>
          <p>
            We use cookies to remember your preferences and ensure that your journey across our website is smooth and responsive to your farming or commercial requirements.
          </p>
        </section>

        <section>
          <h2>4. Third-Party Services</h2>
          <p>
            We partner with secure payment gateways and trusted logistics providers to complete deliveries across India. These partners only receive the information strictly necessary to fulfill their service role.
          </p>
        </section>

        <section>
          <h2>5. Data Protection Commitment</h2>
          <p>
            We implement industry-standard security measures to ensure your personal and business data is kept safe during every interaction with AVM Agri Life Science.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
