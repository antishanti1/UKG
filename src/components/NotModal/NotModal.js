import React from 'react';
import './NotModal.scss';

export default function NotModal({isOpen, onClose, content}) { 
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