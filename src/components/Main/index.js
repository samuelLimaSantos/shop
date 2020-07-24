import React from "react";
import headImage from "../../assets/fone.png";
import star from "../../assets/star.svg";
import starFull from "../../assets/star-full.svg";
import "./style.css";

const Main = () => {
  return (
    <div className="Main">
      <section className="image">
        <img src={headImage} alt="Foto do fone" width="330px" />
      </section>
      <section className="product-info">
        <h1>HYPER X ON-EAR</h1>
        <p className="name">Wireless over-ear headphones</p>
        <div className="avaliation">
          <div className="star-icons">
            <img src={starFull} alt="star" />
            <img src={starFull} alt="start" />
            <img src={starFull} alt="star" />
            <img src={star} alt="star missing" />
          </div>
          <p>4.2 (335)</p>
        </div>
        <div className="description">
          <p>
            <strong>Driver unit</strong>
          </p>
          <p>
            <span>70 mm, done type(CCAW Voice Col)</span>
          </p>
        </div>

        <div className="description">
          <p>
            <strong>Frequency Response</strong>
          </p>
          <p>
            <span>4 HZ + 100.00 Hz</span>
          </p>
        </div>
        <div className="price-and-buy">
          <h2>$89.99</h2>
          <button>ADD TO CART</button>
        </div>
      </section>
    </div>
  );
};

export default Main;
