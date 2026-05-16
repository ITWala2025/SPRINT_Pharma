import React from "react";
import PropTypes from "prop-types";

/**
 * Hero section for the Manufacturing page.
 * @param {string} bgImage - URL of background image
 * @param {string} title - Main heading text
 * @param {string} subtitle - Sub‑heading text
 */
export const ManufacturingHero = ({ bgImage, title, subtitle }) => {
  const style = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section
      className="flex items-center justify-center text-center text-white py-32"
      style={style}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg">{subtitle}</p>
      </div>
    </section>
  );
};

ManufacturingHero.propTypes = {
  bgImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
