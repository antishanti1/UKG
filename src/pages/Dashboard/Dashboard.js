import '../Dashboard/Dashboard.scss';
import Header from '../../components/Header/Header';
import DonutCard from '../../components/DonutCard/DonutCard';
import Profile from '../../components/Profile/Profile';
import PaperSales from '../../components/PaperSales/PaperSales';
import TeamGoals from '../../components/TeamGoals/TeamGoals';
import Notifications from '../../components/Notifications/Notifications';
import UpcomingDates from '../../components/UpcomingDates/UpcomingDates';

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
              <Notifications />
            </div>
            <div>
            
            </div>
            <div className='main-container__two'>
                <UpcomingDates />
                </div>
            </div>
          </div>
     </div>   </>
    )
}

export default Dashboard;