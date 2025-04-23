import React from "react";
import "./HighlightSection.css";
import { useRef } from "react";
const HighlightSection = () => {
    const upcoming = [
        { date: "May 15, 2025", text: "Level 1 Exam" },
        { date: "June 01, 2025", text: "Level 2 Exam" },
        { date: "July 10, 2025", text: "Final Examination" }
    ];

    const cards = [
        { title: "Research Area", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", btn: "Know More" },
        { title: "Analysis Tools", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", btn: "Know More" },
        { title: "Certifications", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", btn: "Know More" },
        { title: "Workshops", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", btn: "Know More" },
        { title: "Career Counseling", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", btn: "Know More" },
      ];

    const sliderRef = useRef();

    const scrollToRight = () => {
        sliderRef.current.scrollLeft += 300; // Scroll 300px to the right
    };

    const scrollToLeft = () => {
        sliderRef.current.scrollLeft -= 300; // Scroll 300px to the left
    };

    return (
        <div className="highlights-section">
            <div className="upcoming-section">
                <div className="upcoming-left">
                    <h2>Upcoming Examinations</h2>
                    <p>Enquiry about the Examination & register for the exams</p>
                </div>
                <div className="separator">|</div>
                <div className="calendar-list">
                    {upcoming.map((item, index) => (
                        <div className="calendar-item" key={index}>
                            <span className="calendar-icon">📅</span>
                            <div>
                                <div className="calendar-date">{item.date}</div>
                                <div className="calendar-text">{item.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="cards-section">
                <div className="card-slider-wrapper">
                    <button onClick={scrollToLeft} className="scroll-button left">&#10094;</button>

                    <div className="card-container" ref={sliderRef}>
                        {cards.map((card, index) => (
                            <div className="card-box" key={index}>
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                                <button>{card.btn}<span>▶</span></button>
                            </div>
                        ))}
                    </div>

                    <button onClick={scrollToRight} className="scroll-button right">&#10095;</button>
                </div>
            </div>
        </div>
    );
};

export default HighlightSection;
