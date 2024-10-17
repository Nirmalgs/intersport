import React, { useState, forwardRef, useImperativeHandle } from 'react';

// Popup component that uses forwardRef to expose openPopup method
const Popup = forwardRef(({ bannerInfo = true }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  // Expose openPopup and closePopup functions to the parent using useImperativeHandle
  useImperativeHandle(ref, () => ({
    openPopup() {
      setIsOpen(true);
    },
    closePopup() {
      setIsOpen(false);
    },
    togglePopup () {
        setIsOpen(!isOpen);
    }
  }));

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 text-center">
      {/* Render passed component */}

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-40">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Info</h2>
            {bannerInfo && <p className="mb-4">Click on above banner to move to the Product Listing page.</p>}
            <p className="mb-4">This is only for demo, no action defined.</p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={togglePopup}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

export default Popup;
