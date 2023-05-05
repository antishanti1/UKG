import SurveyInsights from "../../components/SurveyInsights/SurveyInsights";
import notification from '../../assets/icons/NotificationIcon.svg';

function SurveyPage() {
    return(
        <>
        <div>

        
       <div className='header'>
                <h1 className='header__heading'>Employees</h1>
                <div className='header-right'>
                    <div alt='profile-picture' className='header-right__profile'></div>
                    <img alt='notification-icon' className='header-right__notification' src={notification}></img>
                </div>
            </div>
            <div className="surv-m">
        <SurveyInsights />
        </div></div>
        </>
    )
}

export default SurveyPage;