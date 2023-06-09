
import notification from '../../assets/icons/NotificationIcon.svg';
import '../SurveyPage/SurveyPage.scss'
import surveys from '../../data/surveys.json';
import {useState} from 'react';
import SurveyModal from '../../components/SurveyModal/SurveyModal';

function SurveyPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSurvey, setSelectedSurvey] = useState(null);

    const handleSurveyClick = (survey) => {
        setSelectedSurvey(survey);
        setIsOpen(true);
    };

    return(
        <>

        <div className='surveys'>
        <div className='header'>
                <h1 className='header__heading'>Surveys</h1>
                <div className='header-right'>
                    <div alt='profile-picture' className='header-right__profile'></div>
                    <img alt='notification-icon' className='header-right__notification' src={notification}></img>
                </div>
            </div>
    <div className='surveys-main'>
        {surveys.map((survey, index) => (
           <div key={index} className='surveys-main__cont'>
            <div className='surveys-main__left'>
          <p className='surveys-main__question'>{survey.question}</p>
          <button className='surveys-main__button'  onClick={() => handleSurveyClick(survey)}>View Details</button>
            </div>
            <div className='surveys-main__right'>
                <div className='surveys-main__top'>
                    <span className='surveys-main__ap'> Affect:</span> <img className='surveys-main__img' src={survey.affect} alt={survey.affect} />
                     </div>
                     <div className='surveys-main__top'>
       <span className='surveys-main__ap'> Polarity:</span> <span className='surveys-main__polarity'>{survey.polarity}</span>
                     </div>
                </div>
            </div>   
        ))}
      

    </div>

    <SurveyModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        content={
            selectedSurvey && ( 
                <div className='surveys-modal__box'> 
                <div className='surveys-modal__top'> 
                 <h2 className='surveys-modal__heading'>Details</h2>
                  </div>
                <div className='surveys-modal__bottom'> 
                <div className='surveys-modal__header'> 
                <img className='surveys-main__img' src={selectedSurvey.affect} alt={selectedSurvey.affect} />
                <p className='surveys-modal__date'> Anonymus wrote on {selectedSurvey.date}</p></div>
                <div className='surveys-modal__det'> 
                <span className='surveys-modal__q'>Details:</span>
                <p className='surveys-modal__p'>{selectedSurvey.details}</p>
                <span className='surveys-modal__q'>Comment:</span>
                <p className='surveys-modal__p'>{selectedSurvey.comment}</p></div>
                </div>
                </div>
            )
        }
    />
        </div>
        </>
    )
}

export default SurveyPage;