import './SurveyInsights.scss';
import React from 'react';
import image1 from '../../assets/images/survey-questions/Question-1.png'
import image2 from '../../assets/images/survey-questions/Question-2.png'
import image3 from '../../assets/images/survey-questions/Question-3.png'
import image4 from '../../assets/images/survey-questions/Question-4.png'
import image5 from '../../assets/images/survey-questions/Question-5.png'
import image6 from '../../assets/images/survey-questions/Question-6.png'
import image7 from '../../assets/images/survey-questions/Question-7.png'
import image8 from '../../assets/images/survey-questions/question-8.png'

function SurveyInsights() {
    return (
            <div className="questions">
                <div className='questions-card1'>
                    <img  className='q-img' src={image1} alt= "question 1" />
                </div>
                <div className='questions-card1'>
                    <img className='q-img' src={image2} alt= "question 2"/>
                </div>
                <div className='questions-card1'>
                    <img className='q-img' src={image3} alt= "question 3"/>
                </div>
                <div className='questions-card1'>
                    <img className='q-img' src={image4} alt= "question 4"/>
                </div>
                <div className='questions-card1'>
                    <img className='q-img' src={image5} alt= "question 5"/>
                </div>
                <div className='questions-card1'>
                    <img className='q-img' src={image6} alt= "question 6"/>
                </div>
                <div className='questions-card1'>
                    <img className='q-img' src={image7} alt= "question 7"/>
                </div>
                <div className='questions-card1'>
                    <img className='q-img' src={image8} alt= "question 8"/>
                </div>
            </div>
    )
}

export default SurveyInsights;
