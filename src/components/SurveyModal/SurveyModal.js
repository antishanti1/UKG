import React from 'react';
import './SurveyModal.scss';

export default function SurveyModal({isOpen, onClose, content}) { 
    if (!isOpen) return null;
    return (
     <div className='survey-modal'>
    <div className='survey-modal__content'>
    <button className='survey-modal__close' onClick={onClose}>X
    </button>
    {content}
    </div>
     </div>
    )
}