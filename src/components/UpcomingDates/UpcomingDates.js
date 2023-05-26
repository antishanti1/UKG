import React from 'react';
import './UpcomingDates.scss';
import upcomingDates from '../../data/upcomingDates.json'



export default function UpcomingDates() {
    return (
      <div className="dates">
        <div className="dates__top">
          <h2 className="dates__top-heading">Upcoming Dates</h2>
        </div>
        <div className="dates__bottom">
          <div className="dates__bottom-list">
            {upcomingDates.map((date, index) => (
              <div key={index} className="dates__bottom-item">
                <div >
                   
                  {/* <img src='../../assets/images/meredith.png' alt={date.name} /> */}
                  <img className="dates__bottom-pic" src={date.img} alt={date.name} />
                </div>
                <div className="dates__bottom-emp">
                  <span className="dates__bottom-name">{date.name}</span>
                  <span className="dates__bottom-position">{date.position}</span>
                </div>
                <div className="dates__bottom-details">
                  <span className="dates__bottom-top">{date.event}</span>
                  {date.age && <span className="dates__bottom-bott">{date.age}</span>}
                  {date.years && <span className="dates__bottom-bott">{date.years}</span>}
                  {date.details && <span className="dates__bottom-bott">{date.details}</span>}
                </div>
                <span className="dates__bottom-date">{date.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  

// export default function UpcomingDates() {
// return (
//     <>
//     <div className="dates">
//         <div className="dates__top">
//             <h2 className="dates__top-heading"> Upcoming Dates</h2>
//             </div>
//         <div className="dates__bottom">
//             <div className="dates__bottom-list">
                
//         <div className="dates__bottom-pic">
//         </div>
//         <div className="dates__bottom-emp">
//           <span className="dates__bottom-name">Meredith Palmer</span>
//           <span className="dates__bottom-position"> Supplier Relations</span>
//         </div>

//         <div className="dates__bottom-details">
//             <span className="dates__bottom-top">Birthday</span>
//             <span className="dates__bottom-bott"> 42 Years Young</span>
//         </div>

//        <span className="dates__bottom-date">May 12th</span>

//             </div>
//             </div>


//     </div>
//     </>
// )
// }