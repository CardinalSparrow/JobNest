import React from "react";
import ReactDOM from "react-dom";

// Portal Component
const Portal = ({ children }) => {
  const portalRoot = document.getElementById("portal-root");
  return ReactDOM.createPortal(children, portalRoot);
};

// Backdrop Component
const Backdrop = ({ onClose }) => (
  <div
    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
    onClick={onClose}
  />
);

// Overlay Component
const Overlay = ({ children }) => (
  <div
    className="fixed sm:h-[85vh] sm:w-[40vw] h-[90vh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:p-6 p-3 rounded shadow-lg z-50"
    style={{ background: "linear-gradient(180deg, #22577A 0%, #3EA0E0 100%)" }}
    onClick={(e) => e.stopPropagation()} // Prevent backdrop click from closing the popup
  >
    <div className="text-center">
      <h2 className="text-2xl text-white font-[600]">Launch Your Career Today</h2>
    </div>
    {children}
  </div>
);

// Popup Component
const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <>
        <Backdrop onClose={onClose} />
        <Overlay onClose={onClose}>{children}</Overlay>
      </>
    </Portal>
  );
};

export default Popup;
