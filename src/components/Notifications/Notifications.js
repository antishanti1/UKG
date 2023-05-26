import React from 'react';
import './Notifications.scss';
import { GoPrimitiveDot } from 'react-icons/go';
import notificationsData from '../../data/notifications.json';

export default function Notifications() {
  return (
    <div className='notifications'>
      <div className='notifications__top'>
        <h2 className='notifications__top-heading'>Notifications</h2>
      </div>
      <div className='notifications__bottom'>
        <div className='notifications__bottom-list'>
    
          {notificationsData.map((notification, index) => (
            <div className='notifications__bottom-item' key={index}>
              <span className='notifications__bottom-date'>{notification.date}</span>
              <p className='notifications__bottom-p'>
                <GoPrimitiveDot size={25} style={{ color: '#87ddda' }} /> {notification.message}
              </p>
              <div className='notifications__bottom-buttons'>
                <button className='notifications__bottom-snooze'>Snooze</button>
                <button className='notifications__bottom-view'>View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
