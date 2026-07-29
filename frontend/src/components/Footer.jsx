import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row gy-5">
          {/* COLUMN 1: Brand & Desc */}
          <div className="col-12 col-lg-3 footer-col brand-col">
            <div className="footer-logo-wrap">
              <img src="/assets/avm_ogo.png" alt="Logo" className="footer-brand-logo" onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
            <p className="footer-desc" style={{ marginTop: '15px' }}>
              <strong>AVM Agri Life Science</strong> (Est. 2013) — Dedicated to empowering Indian farmers with high-yield biotechnology products, organic growth promoters, and sustainable soil health solutions formulated by expert scientists in state-of-the-art laboratories. <br /><br />
              <em style={{ color: '#7dd34d', fontWeight: '600' }}>"For Us Farmer is a King"</em>
              <br />
              <span style={{ fontSize: '0.85rem', color: '#e2e8f0', display: 'block', marginTop: '6px' }}>
                నిత్యం రైతుల సేవలో... ఎ వి ఎమ్ అగ్రి లైఫ్ సైన్స్
              </span>
            </p>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="col-12 col-sm-6 col-lg-2 footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><span onClick={() => navigate("/")}>Home</span></li>
              <li><span onClick={() => navigate("/about")}>About Us</span></li>
              <li><span onClick={() => navigate("/all-products")}>All Products</span></li>
              <li><span onClick={() => navigate("/contact")}>Contact Us</span></li>
            </ul>
          </div>

          {/* COLUMN 3: Useful Links */}
          <div className="col-12 col-sm-6 col-lg-3 footer-col">
            <h4 className="footer-heading">Support & Policies</h4>
            <ul className="footer-links">
              <li><span onClick={() => navigate("/privacy-policy")}>Privacy Policy</span></li>
              <li><span onClick={() => navigate("/exchange-policy")}>Exchange Policy</span></li>
              <li><span onClick={() => navigate("/terms-and-conditions")}>Terms & Conditions</span></li>
              <li><span onClick={() => navigate("/shipping-policy")}>Shipping Policy</span></li>
            </ul>
          </div>

          {/* COLUMN 4: Contact Info */}
          <div className="col-12 col-lg-4 footer-col contact-col">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-contact-list">
              <li><strong>MD Contact:</strong> +91 9502978646 (J. Sudhakar)</li>
              <li><strong>Customer Care:</strong> +91 7981257228</li>
              <li><strong>Email:</strong> avmagrilifescience@gmail.com</li>
              <li><strong>Address:</strong> H.No. 4-57, Injapur, Turkayamjal, Abdullapurmet Mandal, R.R. Dist, Hyderabad, TS - 500 070, India</li>
            </ul>

            <div className="footer-social-icons" style={{ marginTop: '15px' }}>
              <a href="tel:+919502978646" aria-label="Phone" className="social-icon ph"><i className="bi bi-telephone"></i></a>
              <a href="https://wa.me/919502978646" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon ig" style={{ backgroundColor: '#16a34a', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><i className="bi bi-whatsapp"></i></a>
              <a href="mailto:avmagrilifescience@gmail.com" aria-label="Email" className="social-icon loc"><i className="bi bi-envelope"></i></a>
            </div>
          </div>
        </div>

        {/* WhatsApp Enquire Row */}
        <div className="footer-bottom-row" style={{ textAlign: 'center', marginTop: '30px', padding: '15px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <a href="https://wa.me/919502978646" target="_blank" rel="noopener noreferrer" className="whatsapp-enquire-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#16a34a', color: '#fff', padding: '10px 24px', borderRadius: '30px', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 4px 12px rgba(22, 163, 74, 0.3)' }}>
            <i className="bi bi-whatsapp" style={{ fontSize: '1.2rem' }}></i> Enquire on WhatsApp
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copyright" style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.85rem', color: '#cbd5e1', textAlign: 'center' }}>
          &copy; {new Date().getFullYear()} AVM AGRI LIFE SCIENCE. An ISO 9001:2015 Certified Company. All rights reserved.
          <div className="developer-credit" style={{ marginTop: '5px', fontSize: '0.8rem', color: '#94a3b8' }}>
            Developed and Maintained by <a href="http://www.zorvixetechnologies.com/">Zorvixe Technologies</a>
            <br />
            Farmer is a King • Always in the service of farmers
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;