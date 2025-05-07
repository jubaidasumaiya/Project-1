import React, { useState, useEffect } from 'react';


function ScrollToTop() {
const [visible, setVisible] = useState(false);

useEffect(() => {
  const toggleVisibility = () => {
    setVisible(window.scrollY > 300);
  };

  window.addEventListener('scroll', toggleVisibility);
  return () => window.removeEventListener('scroll', toggleVisibility);
}, []);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

return (
  <div>
    {visible && (
      <button
        onClick={scrollToTop}
        className="scroll-to-top"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )}
  </div>
);
}

export default ScrollToTop
