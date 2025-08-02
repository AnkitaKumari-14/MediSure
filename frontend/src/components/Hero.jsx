import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            MediSure Health Center is a modern place for complete and caring medical treatment.
We have skilled doctors and staff who understand your health needs with full attention.
Our goal is to give each patient the right care with kindness and respect.
We believe in helping you feel better and stay healthy through every stage of life.
At MediSure, your wellness journey is safe, supported, and guided with genuine care.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
