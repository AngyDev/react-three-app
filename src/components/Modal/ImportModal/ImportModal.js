import React from 'react';
import Button from '../../Button/Button';

export default function ImportModal({onClose }) {
    const onFileChange = () => { }

    const onFileUpload = () => {
        onClose();
    }

    return (
        <div>
            <input type="file" onChange={onFileChange} multiple />
            <Button type="button" onClick={onFileUpload} text="Upload"/>
        </div>
    )
}
