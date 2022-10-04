import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
export default function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2">
      {showTopBtn && (
        <button onClick={goToTop}>
          <FaAngleUp size={24} />
        </button>
      )}{" "}
    </div>
  );
}
