import React from 'react';
import './Profile.scss';
import avatar from '../../assets/images/michael.png'
import { BiDotsHorizontalRounded } from 'react-icons/bi';


export default function Profile (){
return (

    <>
    <div className='profile-card'>
        <div className='profile-card__top'>
            <img  alt='profile' className='profile-card__avatar' src={avatar}></img> 
             <span className='profile-card__more'> <BiDotsHorizontalRounded /></span>
       
          
            </div>
            <div className='profile-card__bottom'>
                <span className='profile-card__name'>Michael Scott
                </span>
                <span className='profile-card__position'>Regional Manager</span>
                </div>
        </div>

    </>
)




}