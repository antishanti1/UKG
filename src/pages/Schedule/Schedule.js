import React, {useState} from 'react';
import './Schedule.scss';
import notification from '../../assets/icons/NotificationIcon.svg';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import events from '../../data/events.json';
import 'react-big-calendar/lib/sass/agenda.scss';
import 'react-big-calendar/lib/sass/styles.scss';
import 'react-big-calendar/lib/sass/event.scss';
import 'react-big-calendar/lib/sass/time-column.scss';
import 'react-big-calendar/lib/sass/time-grid.scss';
import 'react-big-calendar/lib/sass/toolbar.scss';
import 'react-big-calendar/lib/sass/variables.scss';


const localizer = momentLocalizer(moment);


export default function Schedule() {
    const [selectedEvent, setSelectedEvent] = useState(null);
    
    const handleEventClick = (event) => {
        setSelectedEvent(event);
      };
    
      const handleClosePopup = () => {
        setSelectedEvent(null);
      };

    return (
        <div className='schedule'>
                <div className='header'>
                <h1 className='header__heading'>Surveys</h1>
                <div className='header-right'>
                    <div alt='profile-picture' className='header-right__profile'></div>
                    <img alt='notification-icon' className='header-right__notification' src={notification}></img>
                </div>
            </div>

            <div className='schedule-main'>

            {selectedEvent && (
                <div className="popup">
                    <div className="popup__box">
                        <div className="popup__top"> 
                        <span className='popup__heading'>{selectedEvent.title}</span>
                          <button className="notifications__bottom-snooze" onClick={handleClosePopup}>Close</button>
                        </div>
                        <p>{selectedEvent.desc}</p>
                      
                        </div>
                        </div>
            )}
                <div className='schedule-main__calendar'>

              

            <Calendar   
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={new Date(2023, 5, 1)}
            views={{ month: true, week: true }}
            popup={true}
            selectable={true}
            onSelectEvent={handleEventClick}
            components={{
                event: EventComponent,
              }}
            />
  </div>
                </div>
            
      
            
             </div>
    );

}

const EventComponent = ({ event }) => {
    return (
      <span>
        <span>{event.title}</span>
      </span>
    )
  }