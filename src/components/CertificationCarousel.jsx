import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Simple carousel that shows a set number of logos based on viewport width .
 * @param {string[]} logos - Array of image URLs
 */
export const CertificationCarousel = ({ logos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Adjust visible count on resize
  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width < 480) setVisibleCount(1);
      else if (width < 768) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + visibleCount) % logos.length);
  };
  const prev = () => {
    setCurrentIndex((prev) => (prev - visibleCount + logos.length) % logos.length);
  };

  const displayed = logos.slice(currentIndex, currentIndex + visibleCount);
  // If slice goes beyond array end, wrap around
  if (displayed.length < visibleCount) {
    displayed.push(...logos.slice(0, visibleCount - displayed.length));
  }

  return (
    <div className="relative flex items-center justify-center">
      <button
        onClick={prev}
        className="absolute left-0 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-navy"
        aria-label="Previous logos"
      >
        ◀
      </button>
      <div className="flex space-x-4">
        {displayed.map((src, i) => (
          <img key={i} src={src} alt="Certification logo" className="h-12 w-auto" />
        ))}
      </div>
      <button
        onClick={next}
        className="absolute right-0 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-navy"
        aria-label="Next logos"
      >
        ▶
      </button>
    </div>
  );
};

CertificationCarousel.propTypes = {
  logos: PropTypes.arrayOf(PropTypes.string).isRequired,
};
