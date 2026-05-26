import React, { useState } from "react";
import PropTypes from "prop-types";
const ChevronDownIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

/**
 * Accordion component with smooth height transition and ARIA attributes .
 * @param {Object[]} items - Array of { title, content }
 */
export const Accordion = ({ items }) => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggle = id => {
    setOpenItemId(prev => (prev === id ? null : id));
  };

  return (
    <div className="space-y-2">
      {items.map((item, idx) => {
        const isOpen = openItemId === idx;
        return (
          <div key={idx} className="border rounded">
            <button
              className="w-full flex justify-between items-center p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-navy"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              aria-controls={`panel-${idx}`}
            >
              <span>{item.title}</span>
              <ChevronDownIcon
                className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              id={`panel-${idx}`}
              className="overflow-hidden transition-[height] duration-300"
              style={{ height: isOpen ? "auto" : 0 }}
            >
              <div className="p-4 border-t">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};
