import '../Header/Header.scss';
import avatar from "../../assets/images/michael-profile-pic-2.png"
import notification from '../../assets/icons/NotificationIcon.svg';


function Header() {

    return(
        <>
        <div className='header'>
            <h1 className='header__heading'>Hey Michael!</h1>
            <div className='header-right'>
                <img  alt='profile' className='header-right__profile' src={avatar}></img>
                <img alt='notification-icon' className='header-right__notification' src={notification}></img>
            </div>
        </div>
        </>
    )
}

export default Header;