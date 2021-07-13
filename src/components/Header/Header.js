import React, { useState } from 'react';
import Button from '../Button/Button';
import Modal from "../Modal/Modal";
import ImportModal from "../Modal/ImportModal/ImportModal";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => { setIsOpen(true) };

    return (
        <div className="header">
            {/* <h1>This is the header</h1> */}
            <div className="header__container">
                <Button text="Import" type="button" onClick={handleClick} />
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <ImportModal onClose={() => setIsOpen(false)}/>
                </Modal>
            </div>
        </div>
    )
}
