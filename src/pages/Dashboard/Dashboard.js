import '../Dashboard/Dashboard.scss';
import michaelPof from '../../assets/images/micheal-profile.png'
import paperSales from '../../assets/images/paper-sales.png'
import teamGoals from '../../assets/images/team-goals.png'
import upDates from '../../assets/images/upcoming-dates.png'
import notifications from '../../assets/images/notification-modal.png'
import Header from '../../components/Header/Header';
import DonutCard from '../../components/DonutCard/DonutCard';
import Profile from '../../components/Profile/Profile';
import PaperSales from '../../components/PaperSales/PaperSales';
import TeamGoals from '../../components/TeamGoals/TeamGoals';

function Dashboard() {

    return (


        <>     
        
        <div className='main-container'>
  
        <div className='main-container__top'>
         <Header /></div>

         <div className='main-container__bottom'>

        <div className='main-container__left'>
             <div>
                <Profile />
             </div>
             <div>
                < PaperSales />
             </div>
             <div><TeamGoals /></div>
         </div>

         <div className='main-container__right'>
            <div className='main-container__one'>
          <DonutCard />
            </div>
            <div className='main-container__two'>
                </div>
            </div>
          </div>
        {/* <div className='container-dash'>
        <div className='container-dash__left'>
        <div className='michael'>  <img src={michaelPof} alt="chevron-icon" className="img" /></div>
        <div className='paper-sales'>  <img src={paperSales} alt="chevron-icon" className="det__content-icon" /></div>
       <div className='team-goals'><img src={teamGoals} alt="chevron-icon" className="det__content-icon" /></div> </div>

        <div className='container-dash__right'>
            <div className='container-dash__right-inside'>
  
         <div className='notifications'> <img src={notifications} alt="chevron-icon" className="det__content-icon" /></div></div>
        <div className='upcoming-dates'><img src={upDates} alt="chevron-icon" className="det__content-icon" /></div>
        </div></div> */}

     </div>   </>
    )
}

export default Dashboard;