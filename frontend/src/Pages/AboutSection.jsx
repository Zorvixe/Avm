import "./AboutSection.css";
import { Link, useNavigate } from "react-router-dom";
import soilImage from "../assets/about-soil.jpg";
import processLab from "../assets/process-lab.jpg";
import aboutImage from "../assets/video.mp4";
import SplitButtonText from "../animations/SplitButtonText";
import {
  FlaskConical,
  Globe,
  ShieldCheck,
  Sprout,
  Award,
  PhoneCall,
} from "lucide-react";

function AboutSection({ fullPage = false }) {
  const navigate = useNavigate();

  return (
    <>
      {/* HOME ABOUT SECTION */}
      {!fullPage && (
        <section className="about-section">
          <div className="about-left">
            <img
              src={soilImage}
              alt="Soil Science"
              className="about-image"
            />

            <div className="experience-card">
              <h2>13+</h2>

              <p>
                YEARS PIONEERING
                <br />
                AGRI-SCIENCE
              </p>
            </div>
          </div>

          <div className="about-right">
            <span className="about-tag">
              ABOUT AVM AGRI LIFE SCIENCE
            </span>

            <h1 className="about-title">
              Where biotechnology
              <br />
              empowers the farmer.
            </h1>

            <p className="about-text">
              Since our establishment in <strong>2013</strong>, <strong>AVM Agri Life Science</strong> has earned the trust of farming communities across India by consistently delivering superior quality agricultural innovations. Guided by our motto — <em>"For Us Farmer is a King"</em> — our solutions are developed by expert scientists in high-end laboratories.
            </p>

            <p className="about-text">
              We focus on integrated and sustainable farming. From plant growth boosters like Humic and Fulvic acids to advanced pest control biotechnology, every product undergoes rigorous field testing before reaching the farmer's hands.
            </p>

            <div className="features">

              <div className="feature">
                <div className="icon-box">
                  <FlaskConical size={22} />
                </div>

                <div>
                  <h4>Advanced Lab R&D</h4>
                  <p>High-end biotechnology research</p>
                </div>
              </div>

              <div className="feature">
                <div className="icon-box">
                  <Award size={22} />
                </div>

                <div>
                  <h4>ISO Certified</h4>
                  <p>ISO 9001:2015 Certified Company</p>
                </div>
              </div>

              <div className="feature">
                <div className="icon-box">
                  <ShieldCheck size={22} />
                </div>

                <div>
                  <h4>Field Tested</h4>
                  <p>Proven yield improvements</p>
                </div>
              </div>

              <div className="feature">
                <div className="icon-box">
                  <PhoneCall size={22} />
                </div>

                <div>
                  <h4>Dedicated Support</h4>
                  <p>Customer Care: 7981257228</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ABOUT PAGE */}
      {fullPage && (
        <>
          <section className="about-hero">

            <div className="about-overlay"></div>

            <div className="about-hero-content">

              <span>EST. 2013 • HYDERABAD, TELANGANA</span>

              <h1>
                Empowering Indian Agriculture
                <br />
                <em>Through Biotechnology.</em>
              </h1>

              <p>
                Founded in 2013 under the visionary leadership of Managing Director <strong>J. Sudhakar</strong>, AVM Agri Life Science has grown into a trusted national brand — while never losing sight of our motto: <strong>"Farmer is a King"</strong>.
              </p>

            </div>

          </section>

          <section className="about-full-section">

            <div className="about-full-grid">
              <div>

                <h2>Our Philosophy & Motto</h2>

                <p style={{ fontSize: '1.2rem', color: '#16a34a', fontWeight: 'bold', marginBottom: '20px' }}>
                  "పర్యావరణ పరిరక్షణ, సమగ్ర మరియు సుస్థిర, అధిక దిగుబడుల వ్యవసాయమే మా ధ్యేయం"
                </p>

                <p>
                  <em>(Environmental protection, integrated and sustainable, high-yielding agriculture is our motto.)</em>
                </p>

                <p>
                  At <strong>AVM Agri Life Science</strong>, we believe crop nutrition and protection should never be a compromise. Utilizing advanced laboratory equipment and molecular biology, our expert scientists develop cutting-edge formulations designed to combat crop diseases, improve nutrient absorption, and promote robust root development.
                </p>

                <p>
                  Every product is thoroughly field-tested before being distributed through our dedicated dealer network across India. Backed by experienced agronomical marketing professionals and reliable customer support, we are committed to helping farmers overcome current agricultural challenges and achieve sustainable prosperity.
                </p>

              </div>
              <div>

                <img
                  src={soilImage}
                  className="about-full-image"
                  alt="Soil Health"
                />

              </div>

            </div>

          </section>

          <section className="story-area">
            <div className="story-wrapper">

              <div className="story-photo-box">
                <video
                  src={aboutImage}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="story-video"
                />
              </div>

              <div className="story-info">

                <h2 className="story-heading">
                  THE STORY BEHIND
                  <br />
                  <span>AVM AGRI LIFE SCIENCE</span>
                </h2>

                <p className="story-text">
                  Established in 2013 in Hyderabad, Telangana (H.No. 4-57, Injapur, Turkayamjal), AVM Agri Life Science was founded with a clear vision: to provide farmers with the exceptionally high-quality products they desire. In a very short time, agricultural communities recognized AVM for delivering outstanding results in crop protection and soil fertility.
                </p>

                <p className="story-text">
                  As an <strong>ISO 9001:2015 Certified Company</strong>, we offer a comprehensive portfolio including Humic Acid + Fulvic Acid growth promoters (WONDER), plant growth regulators (GOLD), bio-stimulants, and specialized pest & disease defense formulas (ATTACK, JAGUAR, ROYAL, PROTON, COMA, JAYAM). We invite all dealers and farmers to join us in revolutionizing Indian agriculture.
                </p>

                <div style={{ margin: '20px 0', padding: '15px', background: '#f0fdf4', borderLeft: '4px solid #16a34a', borderRadius: '4px' }}>
                  <p style={{ margin: 0, fontWeight: 'bold', color: '#064e3b' }}>
                    Managing Director: J. Sudhakar • Contact: 9502978646<br />
                    Customer Care Helpdesk: 7981257228
                  </p>
                </div>

                <button
                  className="split-btn"
                  onClick={() => navigate("/all-products")}
                >
                  <SplitButtonText
                    text="Explore Our Products"
                    delay={0.03}
                    duration={0.5}
                    ease="power3.out"
                  />
                </button>
              </div>

            </div>
          </section>
        </>
      )}
    </>
  );
}

export default AboutSection;