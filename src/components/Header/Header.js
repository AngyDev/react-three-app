import React from 'react';
import Button from '../Button/Button';

export default function Header() {
    return (
        <div className="header">
            {/* <h1>This is the header</h1> */}
            <div className="header__container">
                <Button text="Import" type="button" />
            </div>
        </div>
    )
}
