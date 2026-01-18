import React from "react";
import { gsap } from "gsap";

const Hero = () => {
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">Nge-Drink</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left leaf"
          className="left-leaf"
        />
      </section>
    </>
  );
};

export default Hero;
