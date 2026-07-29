import React from "react";
import { ArrowRight } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import slide1 from "../../assets/gallery-1.jpg";
import slide2 from "../../assets/gallery-2.jpg";
import slide3 from "../../assets/gallery-3.jpg";
import slide4 from "../../assets/product-1.jpg";
import slide5 from "../../assets/product-2.jpg";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-section">

      <div className="hero-overlay"></div>
      <div className="hero-grid"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}

        <div className="hero-content">

          <div className="hero-tag">
            <span className="dot"></span>
            ADVANCING GLOBAL AGRICULTURE • EST. 1998
          </div>

          <h1 className="hero-title">
            Nurturing
            <br />

            <span>Growth</span>

            <br />

            Through
            <br />
            Science.
          </h1>

          <p className="hero-description">
            Premium bio-active fertilizers engineered for
            high-yield resilience and ecological harmony.
            Experience the luxury of sustainable abundance.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Explore Products
              <ArrowRight size={18} />
            </button>

            <button className="secondary-btn">
              Contact Us
            </button>

          </div>

          {/* <div className="hero-stats">

            <div className="stat">
              <h2>25+</h2>
              <p>Countries Served</p>
            </div>

            <div className="stat">
              <h2>98%</h2>
              <p>Customer Satisfaction</p>
            </div>

            <div className="stat">
              <h2>1M+</h2>
              <p>Farmers Empowered</p>
            </div>

          </div> */}

        </div>

        {/* RIGHT IMAGE */}

        <div className="hero-image-wrapper">


  <div className="hero-carousel">

    <Carousel
      autoPlay
      infiniteLoop
      interval={3500}
      showThumbs={false}
      showStatus={false}
      showIndicators={true}
      showArrows={false}
      swipeable
      emulateTouch
    >
      <div>
        <img src={slide1} alt="Slide 1" className="hero-slide-image" />
      </div>

      <div>
        <img src={slide2} alt="Slide 2" className="hero-slide-image" />
      </div>

      <div>
        <img src={slide3} alt="Slide 3" className="hero-slide-image" />
      </div>

      <div>
        <img src={slide4} alt="Slide 4" className="hero-slide-image" />
      </div>

    </Carousel>

  </div>

</div>

      </div>

    </section>
  );
}

export default HeroSection;