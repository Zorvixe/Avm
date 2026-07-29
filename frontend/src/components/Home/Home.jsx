import { useEffect, useState } from "react";
import HeroSection from "../HeroSection/HeroSection";
import Stats from "../HeroSection/Stats";
import AboutSection from "../../Pages/AboutSection";
import "../../Pages/ProductsPages.css"
import { ArrowRight } from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import AnimatedWave from "../../animations/AnimatedWave";
import "./Home.css"
import { TbBulb } from "react-icons/tb";
import FarmerVoices from "../../Pages/FarmerVoices";
import { getProducts } from "../../data/products";

import {
  UserRound,
  Leaf,
  BadgeCheck,
  Globe,
  TrendingUp,
  ChevronUp, ChevronDown
} from "lucide-react";


import farmer1 from "../../assets/farmer-1.jpg";
import farmer2 from "../../assets/farmer-2.jpg";
import farmer3 from "../../assets/farmer-3.jpg";
import { FaStar, FaRegStar } from "react-icons/fa";

const values = [
  {
    icon: <TbBulb size={34} />,
    title: "Innovation-Driven",
    subtitle: "Solutions",
    active: false,
  },
  {
    icon: <UserRound size={34} />,
    title: "Farmer-Centric",
    subtitle: "Approach",
    active: false,
  },
  {
    icon: <Leaf size={34} />,
    title: "Sustainability at the",
    subtitle: "Core",
    active: false,
  },
  {
    icon: <BadgeCheck size={34} />,
    title: "Trusted Quality &",
    subtitle: "Yield",
    active: false,
  },
  {
    icon: <Globe size={34} />,
    title: "Global Standards,",
    subtitle: "Local Impact",
    active: false,
  },
  {
    icon: <TrendingUp size={34} />,
    title: "Empowering Future",
    subtitle: "Farming",
    active: false,
  },
];

const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Punjab, India",
    image: farmer1,
    quote:
      "Using these products completely transformed my wheat harvest. The root strength and overall yield increased by almost 25% this season. Truly dependable!",
  },
  {
    name: "Suresh Patel",
    location: "Gujarat, India",
    image: farmer2,
    quote:
      "I was struggling with poor soil nutrient absorption in my cotton fields. Since switching to this fertilizer line, the plant health and boll size have been remarkable.",
  },
  {
    name: "Anand Verma",
    location: "Maharashtra, India",
    image: farmer3,
    quote:
      "What impressed me most is how consistent the quality is. My sugarcane crop stayed green through dry spells, and the sugar recovery rate exceeded my expectations.",
  },
];

export const faqs = [
  {
    question: "What makes your fertilizers different from traditional ones?",
    answer:
      "Our formulas are scientifically engineered for optimized nutrient uptake, reducing soil runoff while maximizing plant nutrition and root development.",
  },
  {
    question: "Are your products safe for long-term soil health?",
    answer:
      "Yes! We focus on sustainable farming solutions that nourish both the crops and the soil microbiome, preventing long-term soil degradation.",
  },
  {
    question: "Which crops are best suited for these products?",
    answer:
      "Our products are suitable for a wide variety of crops, including cereals, fruits, vegetables, pulses, oilseeds, cotton, sugarcane, and horticultural crops. Always follow the recommended dosage for your specific crop.",
  },
  {
    question: "How often should fertilizers be applied?",
    answer:
      "Application frequency varies depending on the crop and soil condition. Generally, fertilizers are applied during land preparation, planting, and key growth stages for the best results.",
  }
];

function Home() {
  const navigate = useNavigate();
  const cards = [...testimonials, ...testimonials];
  const [openIndex, setOpenIndex] = useState(null);
  const [products, setProducts] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "";

    if (imagePath.startsWith("http")) return imagePath;

    let baseUrl = API_URL.replace(/\/api\/?$/, "");

    if (baseUrl.endsWith("/")) {
      baseUrl = baseUrl.slice(0, -1);
    }

    const cleanPath = imagePath.startsWith("/")
      ? imagePath
      : `/${imagePath}`;

    return `${baseUrl}${cleanPath}`;
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const prodList = await getProducts();

        if (Array.isArray(prodList) && prodList.length > 0) {
          setProducts(prodList);
        } else {
          const response = await fetch("http://localhost:5000/products/get");
          const data = await response.json();

          if (data.success) {
            setProducts(data.data);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <HeroSection />
      <Stats />
      <AboutSection />

      <section className="products-section" id="products">

        <div className="products-top">

          <div className="products-heading">

            <span className="products-label">
              THE COLLECTION
            </span>

            <h2 className="">
              Engineered for <br />
              <span>every</span> growth stage.
            </h2>

          </div>

          <div className="products-view">
            <Link to="/all-products">
              VIEW ALL PRODUCTS <span>↗</span>
            </Link>
          </div>

        </div>

        <div className="products-container">
          {products.map((item) => (
            <div className="product-card" key={item.id || item.uuid}>
              <div className="product-image-wrapper">
                <img
                  className="product-image"
                  src={getImageUrl(item.main_image_url)}
                  alt={item.title || item.name}
                />

                <span className="product-badge">
                  {item.badge || item.category_name || "Featured"}
                </span>

                {item.npk && (
                  <span className="product-npk">
                    {item.npk}
                  </span>
                )}
              </div>

              <div className="product-card-body-home">

                <h2>{item.title || item.name}</h2>

                <div className="product-footer">
                  <button
                    onClick={() => {
                      if (item.uuid) {
                        const slugStr = item.name
                          ? item.name
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, "-")
                            .replace(/^-|-$/g, "")
                          : item.slug || "product";

                        navigate(`/product/${item.uuid}/${slugStr}`);
                      } else {
                        navigate("/all-products");
                      }
                    }}
                  >
                    VIEW DETAILS

                    <div className="product-circle">
                      <ArrowRight size={18} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      <section className="wave-section">
        <AnimatedWave />
      </section>

      <section className="values-section">
        <h2 className="values-heading">
          OUR <span>VALUES</span>
        </h2>

        <div className="values-grid">
          {values.map((item, index) => (
            <div
              className={`value-card ${item.active ? "active" : ""}`}
              key={index}
            >
              <div className="left-shape">

                <div className="white-circle">

                  <div className="ring"></div>

                  <div className="icon-circle">
                    {item.icon}
                  </div>

                </div>

              </div>

              <div className="content">
                <h3>{item.title}</h3>
                <h3>{item.subtitle}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FarmerVoices />

      <section className="faq-section">
        <p className="faq-subtitle">FAQ</p>
        <h2 className="faq-title"> Questions, answered.</h2>

        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${openIndex === index ? "active" : ""
              }`}
            key={index}
          >
            <button
              className="faq-question"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <span>{faq.question}</span>

              <span className="faq-icon">
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </span>
            </button>

            <div
              className={`faq-answer ${openIndex === index ? "open" : ""
                }`}
            >
              <div className="faq-answer-content">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </section>

    </>
  );
}

export default Home;