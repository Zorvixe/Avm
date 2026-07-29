import React, { useState } from "react";
import Footer from "../components/Footer";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct WhatsApp Message
    const whatsappNum = "919502978646"; // Official MD / Support number
    const text = `*New Inquiry from Website (AVM Agri Life Science)*%0A%0A*Name:* ${formData.firstName} ${formData.lastName}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Requirement / Message:* ${formData.message}`;

    const waUrl = `https://wa.me/${whatsappNum}?text=${text}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="hero-heading">Get In Touch With AVM</h1>
          <p className="hero-sub">We Are Always Ready To Support Farmers & Agricultural Dealers</p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-body py-5">
        <div className="container">
          <div className="row g-5">
            {/* CONTACT FORM */}
            <div className="col-lg-7">
              <div className="form-wrapper card p-5 border-0 shadow-sm">
                <h2 className="section-title mb-4">Send Us a Requirement</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="Farmer / Dealer Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Surname"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="yourname@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Mobile Number</label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="+91 9502978646"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">How can we support your farming / dealership needs?</label>
                      <textarea
                        name="message"
                        className="form-control"
                        rows="5"
                        placeholder="Tell us about the crops, fertilizers, or growth promoters you need..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-12 mt-4">
                      <button type="submit" className="submit-btn primary-btn w-100 py-3" style={{ backgroundColor: "#16a34a", borderColor: "#16a34a" }}>
                        Send Requirement via WhatsApp <i className="bi bi-whatsapp ms-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* CONTACT INFO CARD */}
            <div className="col-lg-5">
              <div className="info-wrapper p-4 h-100">
                <h2 className="section-title mb-4">Company Headquarters</h2>
                <div className="divider-left"></div>

                <div className="contact-info-list mt-4">
                  <div className="info-item mb-4">
                    <div className="info-icon" style={{ backgroundColor: "#064e3b", color: "#7dd34d" }}>
                      <i className="bi bi-building"></i>
                    </div>
                    <div className="info-text">
                      <h4>Company Name</h4>
                      <p><strong>AVM Agri Life Science</strong><br /><span style={{ fontSize: "0.85rem", color: "#16a34a" }}>An ISO 9001:2015 Certified Company</span></p>
                    </div>
                  </div>

                  <div className="info-item mb-4">
                    <div className="info-icon" style={{ backgroundColor: "#064e3b", color: "#7dd34d" }}>
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <div className="info-text">
                      <h4>Headquarters Address</h4>
                      <p>H.No. 4-57, Injapur, Turkayamjal, Abdullapurmet Mandal, R.R. Dist, Hyderabad, TS - 500 070, India</p>
                    </div>
                  </div>

                  <div className="info-item mb-4">
                    <div className="info-icon" style={{ backgroundColor: "#064e3b", color: "#7dd34d" }}>
                      <i className="bi bi-telephone"></i>
                    </div>
                    <div className="info-text">
                      <h4>Managing Director Contact</h4>
                      <p>+91 9502978646 (J. Sudhakar)</p>
                    </div>
                  </div>

                  <div className="info-item mb-4">
                    <div className="info-icon" style={{ backgroundColor: "#064e3b", color: "#7dd34d" }}>
                      <i className="bi bi-headset"></i>
                    </div>
                    <div className="info-text">
                      <h4>Customer Care & Dealer Support</h4>
                      <p>+91 7981257228</p>
                    </div>
                  </div>

                  <div className="info-item mb-4">
                    <div className="info-icon" style={{ backgroundColor: "#064e3b", color: "#7dd34d" }}>
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div className="info-text">
                      <h4>Email Support</h4>
                      <p>avmagrilifescience@gmail.com</p>
                    </div>
                  </div>

                  <div className="info-item mb-4">
                    <div className="info-icon" style={{ backgroundColor: "#064e3b", color: "#7dd34d" }}>
                      <i className="bi bi-clock"></i>
                    </div>
                    <div className="info-text">
                      <h4>Support Hours</h4>
                      <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* SOCIALS */}
                <div className="mt-5">
                  <h4 className="mb-3">Direct Connect</h4>
                  <div className="social-box d-flex gap-3">
                    <a href="tel:+919502978646" className="social-link ph text-primary"><i className="bi bi-telephone"></i></a>
                    <a href="https://wa.me/919502978646" target="_blank" rel="noopener noreferrer" className="social-link wa text-success"><i className="bi bi-whatsapp"></i></a>
                    <a href="mailto:avmagrilifescience@gmail.com" className="social-link ig text-danger"><i className="bi bi-envelope"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMBEDDED MAP (Statically Placed to Hyderabad / Turkayamjal area) */}
      <section className="contact-map">
        <iframe
          title="AVM Agri Life Science Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.6!2d78.58!3d17.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfDgsAxOScwMC4wIk4gNzhDMzQnNDguMCJF!5e0!3m2!1sen!2sin!4v1780000000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
