import React, { useState } from "react";
import './Section.css'

const Section = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-slider">
      <button className="arrow left" onClick={prevSlide}>&#10094;</button>
      
      <div className="hero-slide">
        <div className="hero-left">
          <h1>{slides[index].title}</h1>
          <p>{slides[index].text}</p>
          <button className="know-more">Know More</button>
        </div>
        <div className="hero-right">
          <img src={slides[index].img} alt="slide visual" />
        </div>
      </div>

      <button className="arrow right" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Section;
