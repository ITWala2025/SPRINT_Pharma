import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Tabs component
 * @param {Object[]} tabs - Array of tab objects { label, content }
 * @param {number} defaultActive - Index of the default active tabs
 */
export const Tabs = ({ tabs, defaultActive = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultActive);
  const tabRefs = useRef([]);

  // Keyboard navigation: left/right arrows
  const handleKeyDown = (e, index) => {
    if (e.key === "ArrowRight") {
      const next = (index + 1) % tabs.length;
      setActiveTab(next);
      tabRefs.current[next].focus();
    } else if (e.key === "ArrowLeft") {
      const prev = (index - 1 + tabs.length) % tabs.length;
      setActiveTab(prev);
      tabRefs.current[prev].focus();
    }
  };

  // Ensure focus ring is visible on tab focus
  useEffect(() => {
    const current = tabRefs.current[activeTab];
    if (current) current.focus();
  }, [activeTab]);

  return (
    <div className="w-full">
      <div role="tablist" className="flex border-b border-gray-200">
        {tabs.map((tab, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={activeTab === i}
            aria-controls={`panel-${i}`}
            id={`tab-${i}`}
            ref={el => (tabRefs.current[i] = el)}
            tabIndex={activeTab === i ? 0 : -1}
            className={`px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-navy transition-colors ${
              activeTab === i
                ? "text-primary-navy border-b-2 border-primary-navy"
                : "text-gray-600 hover:bg-light-teal"
            }`}
            onClick={() => setActiveTab(i)}
            onKeyDown={e => handleKeyDown(e, i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, i) => (
        <div
          key={i}
          role="tabpanel"
          id={`panel-${i}`}
          aria-labelledby={`tab-${i}`}
          hidden={activeTab !== i}
          className="p-4"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  defaultActive: PropTypes.number,
};
