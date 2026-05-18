import React from "react";
import PropTypes from "prop-types";

/**
 * Button that triggers a file download.
 * @param {string} filePath - Path to the file in the public folder
 * @param {string} label - Button labels
 */
export const DownloadButton = ({ filePath, label = "Download" }) => {
  const handleClick = () => {
    // Create a temporary anchor to trigger download
    const link = document.createElement("a");
    link.href = filePath;
    link.download = ""; // Let browser infer filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-primary-navy text-white rounded hover:bg-light-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-navy"
    >
      {label}
    </button>
  );
};

DownloadButton.propTypes = {
  filePath: PropTypes.string.isRequired,
  label: PropTypes.string,
};
