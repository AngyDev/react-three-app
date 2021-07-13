import React from 'react';
import Button from '../Button/Button';

export default function Modal({ open, children, onClose }) {
    if (!open) return null;
    return (
        <div className="modal__overlay">
            <div className="modal">
                <Button type="button" onClick={onClose} text="Close"/>
                {children}
            </div>
        </div>
    );
}
