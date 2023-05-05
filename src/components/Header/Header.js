import '../Header/Header.scss';
import notification from '../../assets/icons/NotificationIcon.svg';


function Header() {

    return(
        <>
        <div className='header'>
            <h1 className='header__heading'>Hey Michael!</h1>
            <div className='header-right'>
                <div alt='profile-picture' className='header-right__profile'></div>
                <img alt='notification-icon' className='header-right__notification' src={notification}></img>
            </div>
        </div>
        </>
    )
}

export default Header;