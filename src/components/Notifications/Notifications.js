import {useState} from 'react';
import './Notifications.scss';
import { GoPrimitiveDot } from 'react-icons/go';
import notificationsData from '../../data/notifications.json';
import NotModal from '../NotModal/NotModal';
import SModal from '../SModal/SModal';


export default function Notifications() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [isSnoozeOpen, setIsSnoozeOpen] = useState(false);

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
    setIsOpen(true);
  };

  const handleSnoozeButtonClick = () => {
    setIsSnoozeOpen(true);
  };

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
              <button className='notifications__bottom-snooze' onClick={handleSnoozeButtonClick}>
                  Snooze
                </button>
                <button className='notifications__bottom-view' onClick={() => handleNotificationClick(notification)} 
                >View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NotModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        content={
          selectedNotification && (
        <div className='notmodal-box'> 
        <div className='notmodal-top'> 
         <h2 className='notmodal__heading'>Notification</h2>
           <span className='notifications__bottom-date' >{selectedNotification.date}</span> </div>
        <div className='notmodal-bottom'> 
        <div className='notmodal-bottom__emp'> 
        <img className="dates__bottom-pic" src={selectedNotification.img} alt={selectedNotification.name} />
        <p> {selectedNotification.name} wrote on {selectedNotification.postdate}</p> </div>
        <div className='notmodal-bottom__message'>
        <p>{selectedNotification.note}</p>
          </div>
        </div>
        </div>)}
      />
            <SModal
        isOpen={isSnoozeOpen}
        onClose={() => setIsSnoozeOpen(false)}
        content={
        <div className='smodal__box'>
          <span className='smodal__sorry'>Sorry!</span>
          <p> You've reached your soozing limit this week.</p>
          </div>
        }
      />
    </div>
  );
}
