import React from "react";
import "./LoremSection.css";

const statsData = [
  {
    label: "Lorem ipsum",
    number: "123+",
    title: "Lorem Ipsum",
    description: "This is a short explanation text that gives more context or information about the stat."
  },
  {
    label: "Dolor sit",
    number: "456+",
    title: "Dolor Sit",
    description: "Additional information here that describes the significance of this number or heading."
  },
  {
    label: "Amet consectetur",
    number: "789+",
    title: "Amet Consectetur",
    description: "This is another line of meaningful description to explain what's being measured."
  },
  {
    label: "Elit sed",
    number: "101+",
    title: "Elit Sed",
    description: "Short and sweet explanation that aligns with the visual layout and design intent."
  }
];

const LoremSection = () => {
  return (
    <div className="stats-section">
      {statsData.map((item, index) => (
        <div className="stat-item" key={index}>
          <div className="stat-label">{item.label}</div>
          <div className="stat-number">{item.number}</div>
          <div className="stat-title">{item.title}</div>
          <div className="stat-description">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default LoremSection;
