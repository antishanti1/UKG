import React from "react";
import Header from "../Header/Header";
import notification from '../../assets/icons/NotificationIcon.svg';
import '../Header/Header.scss';
import Meredith from "../../assets/images/meredith-card.png";
import Oscar from "../../assets/images/oscar-card.png"
import Dwight from "../../assets/images/dwight-card.png"
import Pam from "../../assets/images/pam-card.png"
import "./Employee.scss";


function Employees() {
    return (
        <div className="container-2">
            <div className='header'>
                <h1 className='header__heading'>Employees</h1>
                <div className='header-right'>
                    <div alt='profile-picture' className='header-right__profile'></div>
                    <img alt='notification-icon' className='header-right__notification' src={notification}></img>
                </div>
            </div>

            <div className="employee-cards">
                <div className="employee-cards__section">
                    <div className="employee-cards__top">
                        <img className="img1" src={Meredith} alt="meredith palmer" />
                    </div>
                    <div className="employee-cards__top">
                        <img className="img1" src={Oscar} alt="meredith palmer" />
                    </div>
                    <div className="employee-cards__bottom">
                        <img className="img1" src={Dwight} alt="meredith palmer" />
                    </div>
                    <div className="employee-cards__bottom">
                        <img className="img1" src={Pam} alt="meredith palmer" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employees;