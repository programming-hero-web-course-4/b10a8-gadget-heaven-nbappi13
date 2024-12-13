import React from 'react';
import './Modal.css';

const Modal = ({ message, image, onClose }) => {
    return (
        <div className="modal-backdrop">
            <div className="modal-content animate-fade-in">
                <h3 className="modal-message">{message}</h3>
                {image && <img src={image} alt="Product" className="modal-image" />}
                <button onClick={onClose} className="modal-close-btn">
                    Got it! 🎉
                </button>
            </div>
        </div>
    );
};

export default Modal;
