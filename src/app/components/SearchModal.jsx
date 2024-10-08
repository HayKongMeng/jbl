import React from 'react';

const SearchModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }


  const handleOverlayClick = (e) => {
    // Close the modal only if the click is outside the content area
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="search-modal" onClick={handleOverlayClick}>
      <div className="search-modal-content">
        <svg width="21" height="23" viewBox="0 0 21 23" fill="currentColor" aria-hidden="true" focusable="false" role="presentation" class="icon"><path d="M14.398 14.483 19 19.514l-1.186 1.014-4.59-5.017a8.317 8.317 0 0 1-4.888 1.578C3.732 17.089 0 13.369 0 8.779S3.732.472 8.336.472c4.603 0 8.335 3.72 8.335 8.307a8.265 8.265 0 0 1-2.273 5.704ZM8.336 15.53c3.74 0 6.772-3.022 6.772-6.75 0-3.729-3.031-6.75-6.772-6.75S1.563 5.051 1.563 8.78c0 3.728 3.032 6.75 6.773 6.75Z"></path></svg>
        <input type="text" placeholder="Search..." className="search-input" />
      </div>
      
      <div className="modal-overlay"  onClick={onClose}></div>
    </div>
  );
};

export default SearchModal;
