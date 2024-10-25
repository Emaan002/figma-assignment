import React from "react";
import "../styles/hero.css";
import Navbar from "./Navbar";
import Button from "./Button";
import Image from "next/image";

function Hero() {
  return (
    <section className="hero-section">
      <Navbar />
      <div className="hero"> 
        <div>
        <div className="heading">
          <h1>Hi, I am John,</h1> <br />
          <h1>Creative Technologist</h1>
        </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
         </div> 
        <Image src="/hero-image.png" alt="profile image" width={300} height={300} />
      </div>
      <Button />
    </section>
  );
}

export default Hero;
