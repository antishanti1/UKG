import React from 'react';
import './Notifications.scss';
import {GoPrimitiveDot} from 'react-icons/go';


export default function Notifications() {
return (
    <>
    <div className='notifications'>
        <div className='notifications__top'>
            <h2 className='notifications__top-heading'>Notifications</h2>
            </div>
            <div className='notifications__bottom'>
                <div className='notifications__bottom-list'>
                    <span className='notifications__bottom-date'>May 5,2023 9:30 AM</span>
                    <p className='notifications__bottom-p'> <GoPrimitiveDot size={25} style={{ color: '#87ddda' }}/> Reminder: Make schedule for week of May 8th</p>
                    <div className='notifications__bottom-buttons'>
                    <button className='notifications__bottom-snooze'>Snooze</button>
                    <button className='notifications__bottom-view'>View</button>
                    </div>
                    </div>
                <div className='notifications__bottom-list'>
                    <span className='notifications__bottom-date'>May 5,2023 8:17 AM</span>
                    <p className='notifications__bottom-p'> <GoPrimitiveDot size={25} style={{ color: '#87ddda' }}/> Employee survey results are ready for review</p>
                    <div className='notifications__bottom-buttons'>
                    <button className='notifications__bottom-snooze'>Snooze</button>
                    <button className='notifications__bottom-view'>View</button>
                    </div>
                    </div>
                </div>
        </div>
    </>
)

}