import React from "react";
import "./FaqSection.css";

const FaqSection = () => {
  const faqs = [
    "What is the enrollment process?",
    "How can I access course materials?",
    "Are the exams online or offline?",
    "What support is available for students?"
  ];

  return (
    <div className="faq-subscribe-section">
      {/* FAQ Section */}
      <div className="faq-section">
        <h2 className="faq-title">FAQ</h2>
        <div className="faq-list">
          {faqs.map((question, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question">
                <span>{question}</span>
                <span className="faq-icon">+</span>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="subscribe-section">
        <h3 className="subscribe-title">Subscribe</h3>
        <p className="subscribe-text">
          Stay updated with the latest news, programs, and events delivered to your inbox.
        </p>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe Now</button>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
