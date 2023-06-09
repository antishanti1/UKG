import React from 'react';
import './SModal.scss';

export default function SModal({isOpen, onClose, content}) { 
    if (!isOpen) return null;
    return (
     <div className='not'>
    <div className='not__content'>
    <button className='not__close' onClick={onClose}>X
    </button>
    {content}
    </div>
     </div>
    )
}