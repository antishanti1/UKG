import React from "react";
import Nav from "../Nav/Nav"
import Header from "../Header/Header"
import notification from '../../assets/icons/NotificationIcon.svg';
import '../Header/Header.scss';


function Employees() {
    return (
        <>
            <div className='header'>
                <h1 className='header__heading'>Results</h1>
                <div className='header-right'>
                    <div alt='profile-picture' className='header-right__profile'></div>
                    <img alt='notification-icon' className='header-right__notification' src={notification}></img>
                </div>
            </div>
            <div className="employee-cards">
                <div className="employee-cards__top-left">
                    <img src="../../assets/images/meredith-card.png" alt= "meredith palmer" />
                </div>
                <div className="employee-cards__top-right">
                    <img src="../../assets/images/meredith-card.png" alt= "meredith palmer"/>
                </div>
                <div className="employee-cards__bottom-left">
                    <img src="../../assets/images/meredith-card.png" alt= "meredith palmer"/>
                </div>
                <div className="employee-cards__bottom-right">
                    <img src="../../assets/images/meredith-card.png" alt= "meredith palmer"/>
                </div>
            </div>
        </>
    )
}